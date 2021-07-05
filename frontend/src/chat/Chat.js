import { useState, useEffect, useLayoutEffect, useRef, memo } from 'react';
import Avatar from '../components/Avatar/Avatar'
import Button from '../components/Buttons/Button'
import { TransitionGroup, Transition, CSSTransition } from "react-transition-group";
import { MdAddAPhoto, MdMoreVert, MdDone, MdArrowDownward, MdArrowBack } from 'react-icons/md';
import { useParams, useRouteMatch, useLocation, Link, Route, useHistory } from 'react-router-dom';
import EcommerceLoader from '../components/Loader/EcommerceLoader'
import MediaPreview from "./MediaPreview";
import ImagePreview from "./ImagePreview";
import ChatFooter from "./ChatFooter";
import anime from 'animejs/lib/anime.es.js';
import AudioPlayer from "./AudioPlayer.js"
import './styles/Chat.scss';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { API } from '../config';
import { io } from "socket.io-client";
import moment from 'moment'
import ManufacturerProfile from './ManufacturerProfile'
import Card from '../components/Cards/Card'


function Chat({ animState, unreadMessages, b }) {
    const [input, setInput] = useState('');
    const { roomID } = useParams();
    const location = useLocation()
    const match = useRouteMatch();
    const dispatch = useDispatch();
    const socket = useRef();

    // const [{ dispatchMessages, user, roomsData, page }, dispatch, actionTypes] = useStateValue();
    const { dispatchMessages, page, currentChat }  = useSelector( state => state.chat);
    const { user } = useSelector( state => state.auth)
    const [imagePreview, setImagePreview] = useState({})
    const [messages, setMessages] = useState([]);
    const [openMenu, setOpenMenu] = useState(null);
    const [deleting, setDeleting] = useState(false);
    const [focus, setFocus] = useState(false);
    const [token, setToken] = useState('');
    const [state, setState] = useState(location.state ? location.state : {});
    const [seen, setSeen] = useState(false);
    const [typing, setTyping] = useState(false);
    const [src, setSRC] = useState('');
    const [image, setImage] = useState(null);
    const [writeState, setWriteState] = useState(0);
    const [ratio, setRatio] = useState(false);
    const [scrollArrow, setScrollArrow] = useState(false);
    const [clientWidth, setClientWidth] = useState(null);
    const [firstRender, setFirstRender] = useState(false);
    const [sendAnim, setSendAnim] = useState(false);
    const [limitReached, setLimitReached] = useState(Boolean(dispatchMessages[roomID]?.limitReached));
    const history = useHistory();
    const chatBodyRef = useRef();
    const lastMessageRef = useRef();
    const chatBodyContainer = useRef();
    const chatAnim = useRef();
    const mediaPreview = useRef();
    const prevMessages = useRef([])
    const limit = useRef(30);
    const prevScrollHeight = useRef(null);
    const [audioID, setAudioID] = useState(null);
    const [paginateLoader, setPaginateLoader] = useState(false);
    const [ arrivalMessage, setArrivalMessage] = useState()


    const clickImagePreview = (event, src, ratio) => {
        const target = event.target;
        const node = target.parentNode.parentNode;
        const obj = node.getBoundingClientRect();
        setImagePreview({
    		ratio: ratio,
            top: page.transform === "scale(1)" ? obj.top :  obj.top / (window.innerHeight / page.height),
            left: page.transform === "scale(1)" ? obj.left : obj.left / (window.innerWidth / page.width),
            width: node.offsetWidth,
            height: node.offsetHeight,
            imgW: target.offsetWidth,
            imgH: target.offsetHeight,
            src,
        })
    }

    const close = () => {
        mediaPreview.current.style.animation = "opacity-out 300ms ease forwards";
        setTimeout(() => {
            setImage(null);
            setSRC("");
        }, 310);
    };

    const handleFile = event => {
        if (window.navigator.onLine) {
            if (event.target.files[0]) {
                var reader = new FileReader();
                reader.onload = function () {
                    setSRC(reader.result)
                }
                reader.readAsDataURL(event.target.files[0]);
                setImage(event.target.files[0])
            };
        } else {
            alert("No access to internet !!!");
        };
    };

            
            useEffect(() => {
            socket.current = io("http://localhost:5000");
            socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),  
            });
            });
        }, []);

        useEffect(() => {
            arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
        }, [arrivalMessage, currentChat]);

    //window
    const scrollChatBody = () => {
        const nodeArr = Array.from(document.querySelectorAll('.chat__message'));
        const height =  outerHeight(nodeArr[nodeArr.length - 2]) + outerHeight(nodeArr[nodeArr.length - 3]) + outerHeight(nodeArr[nodeArr.length - 4]);
        const lastMHeight = height < page.height / 2 ? height : page.height / 2;
        if (chatBodyContainer.current.scrollHeight - chatBodyContainer.current.offsetHeight === 0) {
            setTimeout(() => {
                if (chatBodyRef.current) {
                	chatBodyRef.current.style.opacity = "1";
                }
                setFirstRender(true)
            }, animState === "entering" ? 350 : 50);
            setTimeout(() => {
                const node = document.querySelector(".chat .chat__lastMessage");
                if (node) {
                    node.style.animation = "none";
                    node.style.opacity = "1";
                }
            }, 50)
        } else if (chatBodyContainer.current.scrollTop + outerHeight(nodeArr[nodeArr.length - 1]) >=
            (chatBodyContainer.current.scrollHeight - chatBodyContainer.current.offsetHeight - lastMHeight)
            && messages[messages.length - 1].uid !== user.uid) {
            if (chatBodyContainer.current.scrollTop !== chatBodyContainer.current.scrollHeight) {
                //console.log("scrolling down 1");
                setSendAnim(true);
                anime({
                    targets: chatBodyContainer.current,
                    scrollTop: chatBodyContainer.current.scrollHeight,
                    duration: 800,
                    easing: "linear",
                    complete: function() {
                        setSendAnim(false);
                    }
                });   
            };
        } else if (messages[messages.length - 1].uid === user.uid) {
            if (chatBodyContainer.current.scrollTop !== chatBodyContainer.current.scrollHeight) {
                //console.log("scrolling down 2");
                setSendAnim(true);
                anime({
                    targets: chatBodyContainer.current,
                    scrollTop: chatBodyContainer.current.scrollHeight,
                    duration: 800,
                    easing: "linear",
                    complete: function() {
                        setSendAnim(false);
                    }
                });
            }

        } else {
            setScrollArrow(true);
        }  
    }

       useEffect(() => {
        if (src !== "") {
            const width = document.querySelector('.mediaPreview img').clientWidth;
            const height = document.querySelector('.mediaPreview img').clientHeight;
            setRatio(height / width);
        }
    }, [src])

    useEffect(() => {
        setClientWidth(document.querySelector('.chat__body--container').clientWidth)
    }, []);

        useEffect(() => {
        if (animState === "entering" && page.width <= 760) {
            setTimeout(() => {
                document.querySelector(".chat").classList.add('chat-animate');
            }, 0)
        } else if (animState === "entered" && page.width <= 760) {
            setTimeout(() => {
                document.querySelector('.sidebar').classList.remove('side');
            }, 50)
        } else if (animState === "exiting" && page.width <= 760 ) {
            setTimeout(() => {
                document.querySelector(".chat").classList.remove('chat-animate');
                setTimeout(() => {
                    document.querySelector('.sidebar').classList.add('side');
                }, 10)
            }, 0)
        }
    }, [animState])

    function outerHeight(el) {
      if (el) {
        var height = el.offsetHeight;
          var style = getComputedStyle(el);

          height += parseInt(style.marginTop) + parseInt(style.marginBottom);
          return height;
      }
      return null;
    }

    const widthRatio = 0.7;

    useEffect(() => {

    const getMessages = async () => {
      try {
        const res = await axios.get(`${API}/message/` + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

    const sendMessage = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: input,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: input,
    });

    try {
      const res = await axios.post(`${API}/message`, message);
      setMessages([...messages, res.data]);
      setInput("");
    } catch (err) {
      console.log(err);
    }
  };

   
    
    return (
        <>
        <div style={!roomID ? { display: "none"} : {}} ref={chatAnim} className="chat">
            <div style={{
                height: page.height,
            }} className="chat__background">

            </div>

            <Card>
            <div className="chat__header">
                {page.width <= 760 ?
                  <div className="flex">
                        <button className="text-2xl" onClick={() => setTimeout(() => history.goBack(), 150)}>
                            <MdArrowBack className="text-Blue " />
                        </button>
                        <div className="avatar__container">
                            <Avatar src= "https://i.stack.imgur.com/xdlU1.jpg?s=128&g=1" />
                        </div>
                 </div>
                : 
                    <div className="avatar__container">
                        <Avatar src={"https://i.stack.imgur.com/xdlU1.jpg?s=128&g=1"} />
                    </div>
                }
                <div className="chat__header--info">
                    <h3 style={page.width <= 760 ? {width: page.width - 165 } : {}}> UserName </h3>
                    <div className="absolute right-2 mobile:top-7">
                        <ManufacturerProfile />
                    </div>
                    <p style={page.width <= 760 ? {width: page.width - 165 } : {}}>{typing === "recording" ? "Recording ..." : typing ? "Typing ..." : messages?.length > 0 ? "Seen at " + messages[messages.length - 1]?.timestamp : ""} </p>
                </div>
{/* 
                <div className="chat__header--right">
                    <input id="attach-media" style={{ display: "none" }} accept="image/*" type="file" onChange={handleFile} />
                    <Button>
                        <label style={{ cursor: "pointer", height: 24 }} htmlFor="attach-media">
                            <MdAddAPhoto />
                        </label>
                    </Button>

                    <Button aria-controls="menu" aria-haspopup="true" onClick={event => setOpenMenu(event.currentTarget)}>
                        <MdMoreVert />
                    </Button>
                </div> */}
            </div>
            </Card>

            <div className="chat__body--container" ref={chatBodyContainer}>
                <div className="chat__body" ref={chatBodyRef}>
                    <div 
                        className="loader__container paginateLoader"
                        style={{
                            height: !limitReached ? 70 : 30,
                        }}
                    >
                        {/* {paginateLoader && !limitReached ? <EcommerceLoader /> : null} */}
                    </div>
                    {messages.map((message, i, messageArr) => {
                        const style = message.imageUrl ? {
                            marginBottom: !messageArr[i + 1] ? 0 : message._id !== messageArr[i + 1]._id ? 30 : 8,
                            width: clientWidth * widthRatio + 20,
                            maxWidth: 320,
                        } : {
                                marginBottom: !messageArr[i + 1] ? 0 : message._id !== messageArr[i + 1]._id ? 30 : 8,
                                width: clientWidth * widthRatio + 20, 
                                maxWidth: 320,
                            }
                        return (
                            <div style={style} ref={i === messages.length - 1  ? lastMessageRef : null} key={message._id} className={`chat__message shadow-button ${message.sender === user._id ? "chat__reciever" : ""} ${i === messages.length - 1 ? "chat__lastMessage" : ""}`}>
                                <span className="chat__name">
                                    {/* {message.name} */} Thomas 
                                </span>
                                {message.imageUrl === "uploading" ?
                                    <div
                                        style={{
                                            width: clientWidth * widthRatio,
                                            height: message.ratio <= 1 ?
                                                    clientWidth * widthRatio > 300 ?
                                                        300 * message.ratio : clientWidth * widthRatio * message.ratio :
                                                    clientWidth * widthRatio < 300 ? clientWidth * widthRatio : 300,
                                        }}
                                        className="image-container"
                                        
                                    >
                                        <div className="image__container--loader">
                                            <EcommerceLoader style={{ width: page.width <= 760 ? 40 : 80, height: page.width <= 760 ? 40 : 80 }} />
                                        </div>
                                    </div>
                                    : message.imageUrl ?
                                        <div                                       	
                                            className="image-container"
                                            style={{
                                                width: clientWidth * widthRatio,
                                                height: message.ratio <= 1 ?
                                                        clientWidth * widthRatio > 300 ?
                                                            300 * message.ratio : clientWidth * widthRatio * message.ratio :
                                                        clientWidth * widthRatio < 300 ? clientWidth * widthRatio : 300,
                                            }}
                                        >
                                            <Link  to={{
                                            	pathname: match.url + "/image",
                                            	state: state,
                                            }}>
                                                <img onClick={(e) => clickImagePreview(e, message.imageUrl, message.ratio)} src={message.imageUrl} alt="" />
                                            </Link>
                                        </div>
                                        : null}
                                {message.audioName ?
                                    <AudioPlayer sender={message.uid === user.uid} roomID={roomID} animState={animState} setAudioID={setAudioID} audioID={audioID} id={message.id} audioUrl={message.audioUrl} audioPlayed={message.audioPlayed} />
                                : <span className="chat__message--message">{message.text}</span>}
                                <span className="chat__timestamp">
                                    {moment(message.createdAt).format("MMMM Do YYYY")}
                                </span>
                            </div>
                        )
                    })}
                    {messages.length > 0 ?
                        <CSSTransition
                            in={seen && messages[messages.length - 1].uid === user.uid}
                            timeout={200}
                            classNames="seen-animate"
                            appear={true}
                        >
                            <p className="seen" >
                                <p><span>Seen <MdDone /></span></p>
                            </p>
                        </CSSTransition>
                    : null}
                </div>
            </div>
            {src !== "" ? <MediaPreview close={close} mediaPreview={mediaPreview} setSRC={setSRC} setImage={setImage} imageSRC={src} /> : null}

            <ChatFooter 
                input={input} 
                setFocus={setFocus}
                image={image}
                change={(e) => setInput(e.target.value)}
                focus={focus}
                state={state}
                token={token}
                roomID={roomID} 
                setAudioID={setAudioID}
                sendMessage={sendMessage} 
            />
            <div></div>
            				
            <CSSTransition
                in={firstRender && scrollArrow && !sendAnim}
                classNames="scroll"
                timeout={310}
                unmountOnExit
            >
                <div className="scroll" onClick={() => 
                    anime({
                        targets: chatBodyContainer.current,
                        scrollTop: chatBodyContainer.current.scrollHeight,
                        duration: 1000,
                        easing: "linear",
                    })}
                >
                    <MdArrowDownward style={{
                        width: 22,
                        height: 22,
                        color: "black",
                    }} />
                    {unreadMessages ? <div><span>{unreadMessages}</span></div> : null}
                </div>
            </CSSTransition>
            {deleting ?
                <div className="chat__deleting">
                    <EcommerceLoader />
                </div> : null
            }
        </div>
        <TransitionGroup component={null}>
            <Transition
                timeout={{
                    appear: 310,
                    enter: 310,
                    exit: 410,
                }}
                classNames="page"
                key={location.pathname}
            >
                {animState => (
                    <Route path={match.url + "/image"} location={location}>
                        <ImagePreview
                            imagePreview={imagePreview}
                            animState={animState}
                        />
                    </Route>
                )}  
            </Transition>
        </TransitionGroup>
        </>
    )
}

export default memo(Chat);
