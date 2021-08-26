// import { useState, useEffect, memo, useRef } from 'react';
// import Sidebar from './Sidebar';
// import Chat from './Chat';
// import { Route, useLocation, useRouteMatch  } from 'react-router-dom';
// import EcommerceLoader from '../components/Loader/EcommerceLoader'
// import { TransitionGroup, Transition, CSSTransition } from "react-transition-group";
// import { useSelector, useDispatch} from 'react-redux' 
// import './styles/App.css';
// import scalePage from "./scalePage";
// import { API } from '../config';
// import axios from 'axios';
// import { io } from "socket.io-client";




// const App = () => {

//   const { path } = useRouteMatch();
//   const { page, pathID  }  = useSelector(state => state.chat);
//   const { user }  = useSelector(state => state.auth);
//   const [pwaEvent, setPwaEvent] = useState(undefined);
//   const [chats, setChats] = useState(null);
//   const [chatsFetched, setChatsFetched] = useState();
//   const location = useLocation();
//   const b = useRef([]);
//   const menus = ["/rooms", "/search", "/users", "/chats"];
//   const [conversations, setConversations] = useState([]);
//   const [conversation, setConversation] = useState([]);
//   const [currentChat, setCurrentChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [arrivalMessage, setArrivalMessage] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const socket = useRef();
//   const scrollRef = useRef()
  

//   const dispatch = useDispatch();


//    useEffect(() => {
//     window.addEventListener('beforeinstallprompt', (e) => {
//       // Prevent the mini-infobar from appearing on mobile
//       //console.log("pwa event executed");
//       e.preventDefault();
//       // Stash the event so it can be triggered later.
//       setPwaEvent(e);
//       // Update UI notify the user they can install the PWA
//     });
//     window.addEventListener("resize", () => {
//       dispatch({ type: "set_scale_page", page: scalePage() });
//     })
//   }, []);
//   ;

//   useEffect(() => {
//     socket.current = io("http://localhost:5000");
//     socket.current.on("getMessage", (data) => {
//       setArrivalMessage({
//         sender: data.senderId,
//         text: data.text,
//         createdAt: Date.now(),
//       });
//     });
//   }, []);

//   useEffect(() => {
//     arrivalMessage &&
//       currentChat?.members.includes(arrivalMessage.sender) &&
//       setMessages((prev) => [...prev, arrivalMessage]);
//   }, [arrivalMessage, currentChat]);

//   useEffect(() => {
//     const getConversations = async () => {
//       try {
//         const res = await axios.get(`${API}/conversation/` + user._id);
//         setConversations(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getConversations();
//   }, [user._id]);


//   useEffect(() => {
//     const getMessages = async () => {
//       try {
//         const res = await axios.get(`${API}/message/` + currentChat?._id);
//         setMessages(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getMessages();
//   }, [currentChat]);

//   useEffect(() => {
//     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);


//     useEffect(() => { 
//         const getConversation = async () => {
//             try {
//             const res = await axios.get(`${API}/conversation/${user._id}`)
//             setConversation(res.data)
//             console.log(res)
//             }
//             catch (err) {
//                 console.log(err)
//             }
//         }
//         getConversation();        
//     }, [user])
        

//   return (
//    <div className="app mt-3" style={{ ...page }} >
//       {/* {page.width <= 760 ?  
//         <Redirect to="/chats" />
//         : <Redirect to="/" />} */}
//       { user ?
//           <div className="app__body">
//             <Sidebar chats={chats} user= {user.name}
//             // rooms={rooms} fetchRooms={fetchRooms} users={users} fetchUsers={fetchUsers}
//              />
//             <TransitionGroup component={null} >
//               {page.width <= 760 ?
//                 <Transition
//                   key={location.pathname.replace("/image", "")}
//                   timeout={260}
//                 >
//                   {state => (
//                     <Route location={location} path={`${path}/room/:roomID`}>
//                       <Chat
//                         b={b}
//                         unreadMessages={chats?.length > 0 ? chats.find(cur => cur.id === pathID)?.unreadMessages : 0}
//                         animState={state}
//                       />
//                     </Route>
//                   )}
//                 </Transition>
//                 :
//                 <CSSTransition
//                   key={location.pathname.replace("/image", "")}
//                   timeout={1010}
//                   classNames="page"
//                 >
//                   {state => (
//                     <Route location={location} path={`${path}/room/:roomID`}>
//                       <Chat
//                         b={b}
//                         unreadMessages={chats?.length > 0 ? chats.find(cur => cur.id === pathID)?.unreadMessages : 0}
//                         animState={state}
//                       />
//                     </Route>
//                   )}
//                 </CSSTransition>
//               }
//             </TransitionGroup>
//           </div> :
//           <div className="loader__container">
//             <EcommerceLoader />
//           </div>
//       }
//     </div>
//   );
// }

// export default memo(App);
// import { useState, useEffect, memo, useRef } from 'react';
// import Sidebar from './Sidebar';
// import Chat from './Chat';
// import { Route, useLocation, useRouteMatch  } from 'react-router-dom';
// import EcommerceLoader from '../components/Loader/EcommerceLoader'
// import { TransitionGroup, Transition, CSSTransition } from "react-transition-group";
// import { useSelector, useDispatch} from 'react-redux'
// import './styles/App.css';
// import scalePage from "./scalePage";
// import { API } from '../config';
// import axios from 'axios';
// import { io } from "socket.io-client";

// const App = () => {

//   const { path } = useRouteMatch();
//   const { page, pathID  }  = useSelector(state => state.chat);
//   const { user }  = useSelector(state => state.auth);
//   const [pwaEvent, setPwaEvent] = useState(undefined);
//   const [chats, setChats] = useState(null);
//   const [chatsFetched, setChatsFetched] = useState();
//   const location = useLocation();
//   const b = useRef([]);
//   const menus = ["/rooms", "/search", "/users", "/chats"];
//   const [conversations, setConversations] = useState([]);
//   const [conversation, setConversation] = useState([]);
//   const [currentChat, setCurrentChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [arrivalMessage, setArrivalMessage] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const socket = useRef();
//   const scrollRef = useRef()

//   const dispatch = useDispatch();

//    useEffect(() => {
//     window.addEventListener('beforeinstallprompt', (e) => {
//       // Prevent the mini-infobar from appearing on mobile
//       //console.log("pwa event executed");
//       e.preventDefault();
//       // Stash the event so it can be triggered later.
//       setPwaEvent(e);
//       // Update UI notify the user they can install the PWA
//     });
//     window.addEventListener("resize", () => {
//       dispatch({ type: "set_scale_page", page: scalePage() });
//     })
//   }, []);
//   ;

//   useEffect(() => {
//     socket.current = io("http://localhost:5000");
//     socket.current.on("getMessage", (data) => {
//       setArrivalMessage({
//         sender: data.senderId,
//         text: data.text,
//         createdAt: Date.now(),
//       });
//     });
//   }, []);

//   useEffect(() => {
//     arrivalMessage &&
//       currentChat?.members.includes(arrivalMessage.sender) &&
//       setMessages((prev) => [...prev, arrivalMessage]);
//   }, [arrivalMessage, currentChat]);

//   useEffect(() => {
//     const getConversations = async () => {
//       try {
//         const res = await axios.get(`${API}/conversation/` + user._id);
//         setConversations(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getConversations();
//   }, [user._id]);

//   useEffect(() => {
//     const getMessages = async () => {
//       try {
//         const res = await axios.get(`${API}/message/` + currentChat?._id);
//         setMessages(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getMessages();
//   }, [currentChat]);

//   useEffect(() => {
//     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//     useEffect(() => {
//         const getConversation = async () => {
//             try {
//             const res = await axios.get(`${API}/conversation/${user._id}`)
//             setConversation(res.data)
//             console.log(res)
//             }
//             catch (err) {
//                 console.log(err)
//             }
//         }
//         getConversation();
//     }, [user])

//   return (
//    <div className
// Name="app mt-3" style={{ ...page }} >
//       {/* {page.width <= 760 ?
//         <Redirect to="/chats" />
//         : <Redirect to="/" />} */}
//       { user ?
//           <div className
// Name="app__body">
//             <Sidebar chats={chats} user= {user.name}
//             // rooms={rooms} fetchRooms={fetchRooms} users={users} fetchUsers={fetchUsers}
//              />
//             <TransitionGroup component={null} >
//               {page.width <= 760 ?
//                 <Transition
//                   key={location.pathname.replace("/image", "")}
//                   timeout={260}
//                 >
//                   {state => (
//                     <Route location={location} path={`${path}/room/:roomID`}>
//                       <Chat
//                         b={b}
//                         unreadMessages={chats?.length > 0 ? chats.find(cur => cur.id === pathID)?.unreadMessages : 0}
//                         animState={state}
//                       />
//                     </Route>
//                   )}
//                 </Transition>
//                 :
//                 <CSSTransition
//                   key={location.pathname.replace("/image", "")}
//                   timeout={1010}
//                   className
// Names="page"
//                 >
//                   {state => (
//                     <Route location={location} path={`${path}/room/:roomID`}>
//                       <Chat
//                         b={b}
//                         unreadMessages={chats?.length > 0 ? chats.find(cur => cur.id === pathID)?.unreadMessages : 0}
//                         animState={state}
//                       />
//                     </Route>
//                   )}
//                 </CSSTransition>
//               }
//             </TransitionGroup>
//           </div> :
//           <div className
// Name="loader__container">
//             <EcommerceLoader />
//           </div>
//       }
//     </div>
//   );
// }

// export default memo(App);

import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {api} from "../utils/api";
import {API} from "../config"
import bg from "./img/2224368.png"
import { useSocket } from "./SocketProvider";
import { myUsers } from "../actions/postAction";

export default function App() {
  const [message, setMessage] = useState("");
  const [recieve, setMeceiveMsg] = useState([]);
  const [otheruser, setOtheruser] = useState(null);
  const id = useSelector((state) => state.auth.user._id);
  const user = useSelector((state) => state.post.users);
  const authUser = useSelector((state) => state.auth.user);
  const socket = useSocket();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myUsers());
  }, [dispatch]);

  const handleSubmit = () => {
    const formdata = {
      text: message,
      senderId: id,
      receiverId: otheruser,
      room: "1234",
    };
    socket.emit("sendMessage", formdata);
    const res = api.post(`${API}/message`, )
    setMessage("");
  };

  const handleSelect = (e) => {
    const currentChat = user.find((data) => data._id === e);
    setOtheruser(currentChat);
    socket.emit("join_room", e);
  };
  useEffect(() => {
    socket &&
      socket.on("getMessage", (data) => {
        setMeceiveMsg([...recieve, data]);
        console.log(data);
      });
  }, [recieve, socket]);

 
  return (
    <div className="w-full grid grid-cols-3 overflow-hidden">
      <div
        style={{
          height: "100vh",
          backgroundColor: "#131c21",
          borderRight: "1px solid #3a4246",
        }}
      >
        <div style={{ backgroundColor: "#161f24" }}>
          <div
            className="flex justify-between items-center p-2"
            style={{ backgroundColor: "#2a2f32" }}
          >
            <img
              src={authUser.avatar}
              alt="my pic"
              className="rounded-full w-14 h-14"
            />
            <div className="flex">
              <i className="fas fa-circle-notch fa-lg mr-12 text-gray-300"></i>

              <i className="fas fa-comment-alt fa-lg mr-12 text-gray-300"></i>

              <i className="fas fa-ellipsis-v fa-lg text-gray-300 relative inline-block text-left  menu-btn"></i>
            </div>
          </div>
          <div
            className="px-4 py-4"
            style={{ borderBottom: "1px solid #242d32" }}
          >
            <input
              style={{ backgroundColor: " #2a2f32" }}
              className="
              w-full
              p-3
              rounded-full
              flex
              items-center
              justify-center
              focus:outline-none focus-ring focus:border-gray-900
              text-white
              cursor-pointer
            "
              type="search"
              placeholder="Search or start new chat"
            />
          </div>
        </div>
        <div className="overflow-y-auto" style={{ height: "100%" }}>
          <div className="flex flex-col mt-4">
            {/* friend list */}
            {user.map((d, i) => {
              return (
                <div
                  onClick={() => handleSelect(d._id)}
                  key={i}
                  className="flex items-center hover px-4"
                >
                  <img
                    src=""
                    className="rounded-full"
                    style={{ width: "5.7rem" }}
                    alt="gfdgf"
                  />
                  <div
                    className="ml-4 flex flex-col w-full pb-8"
                    style={{ borderBottom: "1px solid #242d32" }}
                  >
                    <div className="flex items-center justify-between mt-8">
                      <p className="text-lg text-white font-bold">{d.name}</p>
                      <span className="text-green-600 font-bold">12:13 pm</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-sm">Hey bro</span>

                      <h1
                        className="
                    bg-green-600
                    h-8
                    w-8
                    flex
                    items-center
                    justify-center
                    rounded-full
                    font-bold
                    bg
                  "
                      >
                        1
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* end of friend list */}
          </div>
        </div>
      </div>
      <div className="col-span-2">
        {otheruser ? (
          <div className="flex flex-col" style={{ height: "100vh" }}>
            <div
              className="flex justify-between items-center p-2"
              style={{ backgroundColor: "#2a2f32" }}
            >
              <div className="flex items-center">
                <img src="" alt="my pic" className="rounded-full w-14 h-14" />
                <span className="ml-6 text-white font-bold text-lg">
                  {otheruser && otheruser.name}
                </span>
              </div>
              <div className="flex mr-6">
                <i className="fas fa-search fa-lg mr-16 text-gray-300"></i>
                <i className="fas fa-ellipsis-v fa-lg text-gray-300"></i>
              </div>
            </div>

            <div
              className="overflow-y-scroll flex-1"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="m-auto" style={{ width: "80%" }}>
                <div className="flex flex-col mt-10">
                  <span
                    className="p-4 text-white rounded-lg m-auto"
                    style={{ backgroundColor: "#112028", textAlign: "center" }}
                  >
                    21/01/2021
                  </span>
                  <p
                    className="py-4 text-yellow-300 mt-4 rounded-lg m-auto"
                    style={{
                      backgroundColor: "#112028",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Messages are end-to-end encrpted. No one outside of this
                    chat, not even Whatsapp, can read or listen to
                    <br />
                    them. Click to learn more.
                  </p>
                </div>

                {recieve.map((data, i) => (
                  <div key={i} className="mt-12">
                    <div className="mx-2 mb-2 flex">
                      <div
                        className="
                         bg-black
                         p-4
                         text-white
                         items-end
                         flex
                         justify-between
                         rounded
                       "
                        style={{ backgroundColor: "#112028" }}
                      >
                        <span className="text-lg">{data.text}</span>

                        <p className="text-sm pl-8">11:12pm</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="flex justify-between items-center p-2"
              style={{ backgroundColor: "#1e2428" }}
            >
              <div className="flex">
                <i className="far fa-laugh fa-lg mr-8 text-gray-300"></i>
                <i className="fas fa-paperclip fa-lg text-gray-300"></i>
              </div>
              <input
                className="
              p-2
              rounded-full
              focus:outline-none focus-ring focus:border-gray-900
              text-white
              cursor-pointer
            "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                required
                name="message"
                style={{ width: "90%", backgroundColor: "#33383b" }}
                placeholder="Send your message"
              />

              {/* <i className="fas fa-ellipsis-v fa-lg text-gray-300"></i> */}
              <button onClick={handleSubmit}>Enter</button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col" style={{ height: "100vh" }}>
            <div
              className="overflow-y-scroll flex-1"
              // style={{backgroundImage:"ur"}}"background-image: url(./img/2224368.png)"
            >
              <div className="m-auto" style={{ width: "80%" }}>
                Click to start chatiing with friends
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


