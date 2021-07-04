import {useEffect,  memo, useRef, useState} from 'react';
import Avatar from '../components/Avatar/Avatar'
import { MdCancel, MdSearch, MdPhoto, MdMic } from 'react-icons/md';
import './styles/SidebarChat.css';
import { Link, useRouteMatch } from 'react-router-dom';
import EcommerceLoader from '../components/Loader/EcommerceLoader'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { API } from '../config'


//window
const SidebarChat = ({ dataList, title, fetchList}) => {
    const {page, pathID, conversations} = useSelector( state => state.chat);
    const { user } = useSelector( state => state.auth);
    const [scrollFetch, setScrollFetch] = useState(false);
    const [messages, setMessages] = useState([]);
    const sidebarChatContainer = useRef();

    const { path } = useRouteMatch();

    const dispatch = useDispatch();

    useEffect(() => {
        var a = null;
        if (fetchList) {
            a = function () {
                if (parseInt(sidebarChatContainer.current.scrollTop) === sidebarChatContainer.current.scrollHeight - sidebarChatContainer.current.offsetHeight) {
                    fetchList(setScrollFetch);
                };
            };
            if (dataList?.length > 0) {
                sidebarChatContainer.current.addEventListener("scroll", a);
            };
        };
        const clean = sidebarChatContainer.current;
        return () => {
            if (a) {
                //console.log("removing event");
                clean.removeEventListener("scroll", a);
                
            };
        };
    }, [dataList, fetchList]);
    

     useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`${API}/conversation/` + user._id);
        dispatch({
                    type: "CONVERSATION",
                    payload: res.data,
                    })
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, []);


  const List = () => {
      return (
        <>
            {conversations.map((data, i) => (
            <Link className="link" 
                key={i}
                onClick={() => dispatch({
                    type: "CURRENT_CHAT",
                    payload: data,
                    })}
                to= {`${path}/room/${data._id}`}>
                            <div 
                                className={`sidebar__chat`}
                            >
                                <div className="avatar__container">
                                    <Avatar style={{width: 45,height: 45}} src= "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82" />
                                    {/* {onlineState=== "online" ? <div className="online"></div> : null} */}
                                </div>
                                <div className="sidebar__chat--info">
                                    {/* <h2 
                                        dangerouslySetInnerHTML={{__html: title === "Search Result" ? data._highlightResult.name.value : data.name}}
                                        style={{
                         onClick={() => setCurrentChat(c)                   width: page.width <= 760 ? page.width - 126 : page.width * 0.315 - 126,
                                            marginBottom: lastMessage?.message || lastMessage ? 8 : 0,
                                        }}
                                    ></h2>
                                    <p style={{width: page.width <= 760 ? page.width - 126 : page.width * 0.315 - 126}}>
                                        {lastMessage?.message ? 
                                            <><MdPhoto style={{width: 19,height: 19}} /> <span style={{width: page.width <= 760 ? page.width - 150 : page.width * 0.315 - 150}}>{lastMessage.message}</span> </>
                                            : lastMessage?.audio ?
                                            <><MdMic style={{width: 19,height: 19}} /><span style={{width: page.width <= 760 ? page.width - 150 : page.width * 0.315 - 150}}>{lastMessage.time}</span></>
                                            : lastMessage?.message === "" ?
                                            <><MdPhoto style={{width: 19,height: 19}} /> <span style={{width: page.width <= 760 ? page.width - 150 : page.width * 0.315 - 150}}>Photo</span> </>
                                        :lastMessage}
                                    </p> */}
                                </div>
                                {data?.unreadMessages && pathID !== data.id ?
                                    <div className="sidebar__chat--unreadMessages">
                                        <div>
                                            {data.unreadMessages}
                                        </div>
                                    </div>
                                :null}
                            </div>
                        </Link>
            ))}
                </>
            )}



    useEffect(() => {
        if (page.width <= 760) {
            dispatch({type: "SET_PATH", path: path});
        } else {
            dispatch({type: "SET_PATH", path: ""})
        }
    }, [path, page]);

    return (
        <div ref={sidebarChatContainer} className="sidebar__chat--container">
            <h2 className="animate">{title} </h2>
            { List? <List /> :
                <div className="no-result">   
                    <div>
                            <MdSearch />
                        <div className="cancel-root">
                            <MdCancel />
                        </div>
                    </div>
                    <h2>No {title} found </h2>
                </div>
                
            }
            <div className="loader__container scrollFetch">
                {scrollFetch ? <EcommerceLoader /> : null}
            </div>
        </div>
    )
}

export default memo(SidebarChat);
    