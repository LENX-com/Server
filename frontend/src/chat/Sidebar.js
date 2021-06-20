import { useEffect, useState, memo, useRef } from 'react';
import SidebarChat from './SidebarChat';
import Button from '../components/Buttons/Button'
import Avatar from '../components/Avatar/Avatar'
import { MdMessage, MdPeople, MdHome, MdExitToApp as LogOut, MdSearch, MdGetApp, MdAdd } from 'react-icons/md';
import { useStateValue } from './StateProvider';
import { NavLink, Route, useHistory, Switch } from 'react-router-dom';
import './Sidebar.css';
import audio from './notification.mp3'
import { useSelector } from 'react-redux'

const Sidebar = ({ chats, pwa, rooms, fetchRooms, users, fetchUsers }) => {
    const [searchList, setSearchList] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [menu, setMenu] = useState(1);
    const [mounted, setMounted] = useState(false);
    const { user, page, pathID } = useSelector( state => state.chat);
    let history = useHistory();
    const notification = new Audio(audio);
    // const prevUnreadMessages = useRef((() => {
    //     const data = {};
    //     chats.forEach(cur => cur.unreadMessages || cur.unreadMessages === 0 ? data[cur.id] = cur.unreadMessages : null);
    //     return data;
    // })());

    var Nav;
    if (page.width > 760) {
        Nav = (props) =>
            <div className={`${props.classSelected ? "sidebar__menu--selected" : ""}`} onClick={props.click}>
                {props.children}
            </div>
    } else {
        Nav = NavLink;
    }


    // useEffect(() => {
    //     const data = {};
    //     chats.forEach(cur => {
    //         if (cur.unreadMessages || cur.unreadMessages === 0) {
    //             if ((cur.unreadMessages > prevUnreadMessages.current[cur.id] || !prevUnreadMessages.current[cur.id] && prevUnreadMessages.current[cur.id] !== 0) && pathID !== cur.id) {
    //                 notification.play();
    //             };
    //             data[cur.id] = cur.unreadMessages;
    //         };
    //     });
    //     prevUnreadMessages.current = data;
    // }, [chats, pathID]);

    useEffect(() => {
        if (page.width <= 760 && chats && !mounted) {
            setMounted(true);
            setTimeout(() => {
                document.querySelector('.sidebar').classList.add('side');
            }, 10);
        };
    }, [chats, mounted]);

    return (
        <div className="sidebar_chat" style={{
            minHeight: page.width <= 760 ? page.height : "auto"
        }}>
            <div className="sidebar__header">
                <div className="sidebar__header--left">
                    <Avatar src= "https://dmitripavlutin.com/static/2ba6203c53a01e6a7318dbd94203c96b/db982/profile-picture.webp" />
                    <h4>{user?.displayName} </h4>
                </div>
                <div className="sidebar__header--right">
                    <Button onClick={() => {
                        if (pwa) {
                            console.log("prompting the pwa event")
                            pwa.prompt()
                        } else {
                            console.log("pwa event is undefined")
                        }
                    }} >
                        <MdGetApp />
                    </Button>
                    <Button onClick={() => {
                        history.replace("/chats")
                    }} >
                        <LogOut />
                    </Button>

                </div>
            </div>

            <div className="sidebar__search">
                <form className="sidebar__search--container">
                    <MdSearch />
                    <input
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Search for users or rooms"
                        type="text"
                    />
                    <button style={{ display: "none" }} type="submit" onClick={"search"}></button>
                </form>
            </div>

            <div className="sidebar__menu text-3xl fill-current">
                <Nav
                    classSelected={menu === 1 ? true : false}
                    to="/chat"
                    click={() => setMenu(1)}
                    activeClassName="sidebar__menu--selected"
                >
                    <div className="sidebar__menu--home text-Blue">
                        <MdHome />
                        <div className="sidebar__menu--line"></div>
                    </div>
                </Nav>
                <Nav
                    classSelected={menu === 2 ? true : false}
                    to="/rooms"
                    click={() => setMenu(2)}
                    activeClassName="sidebar__menu--selected"
                >
                    <div className="sidebar__menu--rooms text-Blue">
                        <MdMessage />
                        <div className="sidebar__menu--line"></div>
                    </div>
                </Nav>
                <Nav
                    classSelected={menu === 3 ? true : false}
                    to="/users"
                    click={() => setMenu(3)}
                    activeClassName="sidebar__menu--selected"
                >
                    <div className="sidebar__menu--users text-Blue">
                        <MdPeople />
                        <div className="sidebar__menu--line"></div>
                    </div>
                </Nav>
            </div>

            {page.width <= 760 ?
                <>
                    <Switch>
                        <Route path="/users" >
                            <SidebarChat key="users" fetchList={fetchUsers} dataList={users} title="Users" path="/users" />
                        </Route>
                        <Route path="/rooms" >
                            <SidebarChat key="rooms" fetchList={fetchRooms} dataList={rooms} title="Rooms" path="/rooms" />
                        </Route>
                        <Route path="/search">
                            <SidebarChat key="search" dataList={searchList} title="Search Result" path="/search" />
                        </Route>
                        <Route path="/chats" >
                            <SidebarChat key="chats" dataList={chats} title="Chats" path="/chats" />
                        </Route>
                    </Switch>
                </>  
                :
                menu === 1 ?  
                    <SidebarChat key="chats" dataList={chats} title="Chats" />
                    : menu === 2 ?
                        <SidebarChat key="rooms" fetchList={fetchRooms} dataList={rooms} title="Rooms" />
                        : menu === 3 ?
                            <SidebarChat key="users" fetchList={fetchUsers} dataList={users} title="Users" />
                            : menu === 4 ?
                                <SidebarChat key="search" dataList={searchList} title="Search Result" />
                                : null
            }  
            <div className="sidebar__chat--addRoom" onClick={console.log("createChat")}>
                <Button >
                    <MdAdd />
                </Button>
            </div>
        </div>
    );
};

export default memo(Sidebar);
