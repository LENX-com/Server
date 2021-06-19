import { useState, useEffect, memo, useRef } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Route, useLocation } from 'react-router-dom';
import EcommerceLoader from '../components/Loader/EcommerceLoader'
import { TransitionGroup, Transition, CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from 'react-redux' 
import './App.css';
// import useRoomsData from './useRoomsData';
import scalePage from "./scalePage";



const App = () => {

  const { page }  = useSelector(state => state.chat);
  const [loader, setLoader] = useState(true);
  const [pwaEvent, setPwaEvent] = useState(undefined);
  const [chats, setChats] = useState(null);
  const [chatsFetched, setChatsFetched] = useState();
  const location = useLocation();
  const b = useRef([]);
  const menus = ["/rooms", "/search", "/users", "/chats"];

  const dispatch = useDispatch();


  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      //console.log("pwa event executed");
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setPwaEvent(e);
      // Update UI notify the user they can install the PWA
    });
    // window.addEventListener("resize", () => {
    //   dispatch({ type: "set_scale_page", page: scalePage() });
    // })
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     db.collection("users").doc(user.uid).collection("chats").orderBy("timestamp", "desc").onSnapshot({ includeMetadataChanges: true }, snap => {
  //       if (snap.docs?.length > 0) {
  //         snap.docChanges().forEach(change => {
  //           if (change.type === "added") {
  //             setRoomsData(change.doc.data().userID, change.doc.id);
  //           };
  //         });
  //         if (!snap.metadata.fromCache || (!window.navigator.onLine && snap.metadata.fromCache)) {
  //           setChats(snap.docs.map(cur => ({
  //             ...cur.data(),
  //             id: cur.id
  //           })));
  //         };
  //       } else {
  //         setChats([]);
  //       };
  //     });
  //     fetchRooms(() => null);
  //     // fetchUsers(() => null);
  //   };
  // }, [user]);

  // useEffect(() => {
  //   if (chats?.length > 0) {
  //     if (chats.every(cur => roomsData[cur.id]?.lastMessage)) {
  //       setChatsFetched(true);
  //     };
  //   } else if (chats?.length === 0) {
  //     setChatsFetched(true);
  //   }
  // }, [chats, roomsData]);

  // useEffect(() => {
  //   var s;
  //   if (user) {
  //     setOnlineStatus(user.uid);
  //   }
  //   return () => {
  //     if (s) {
  //       s();
  //     };
  //   };
  // }, [user]);

  // useEffect(() => {
  //   var id = location.pathname.replace("/room/", "");
  //   menus.forEach(cur => id = id.replace(cur, ""))
  //   dispatch({ type: "set_path_id", id });
  // }, [location.pathname]);

  return (
    <div className="app" style={{ ...page }} >
      {page.width <= 760 ?
          <div className="app__body">
            <Sidebar chats={chats} 
                      pwa={pwaEvent} 
                      // rooms={rooms} 
                      // fetchRooms={fetchRooms} 
                      // users={users} 
                      // fetchUsers={fetchUsers} 
                      />
            <TransitionGroup component={null} >
              {page.width <= 760 ?
                <Transition
                  key={location.pathname.replace("/image", "")}
                  timeout={260}
                >
                  {state => (
                    <Route location={location} >
                            {/* path={`${path}/room/:roomID`} */}
                      <Chat
                        b={b}
                        // unreadMessages={chats?.length > 0 ? chats.find(cur => cur.id === pathID)?.unreadMessages : 0}
                        animState={state}
                      />
                    </Route>
                  )}
                </Transition>
                :
                <CSSTransition
                  key={location.pathname.replace("/image", "")}
                  timeout={1010}
                  classNames="page"
                >
                  {state => (
                    <Route location={location} path={`${"path"}/room/:roomID`}>
                      <Chat
                        b={b}
                        // unreadMessages={chats?.length > 0 ? chats.find(cur => cur.id === pathID)?.unreadMessages : 0}
                        animState={state}
                      />
                    </Route>
                  )}
                </CSSTransition>
              }
            </TransitionGroup>
          </div> :
          <div className="loader__container">
            <EcommerceLoader />
          </div>
      }
    </div>
  );
}

export default memo(App);
