import { useEffect, useState, memo } from 'react';
import SidebarChat from './SidebarChat';
import Avatar from '../components/Avatar/Avatar'
import { MdMessage, MdPeople, MdHome, MdExitToApp as LogOut, MdSearch, MdPhoto } from 'react-icons/md';
import { NavLink, Route, Link, useRouteMatch, Switch  } from 'react-router-dom';
import './styles/Sidebar.scss';
import { useSelector } from 'react-redux'

const Sidebar = ({ chats, pwa, rooms, fetchRooms, users, fetchUsers, user}) => {
    const [searchList, setSearchList] = useState(null);  
    const [searchInput, setSearchInput] = useState("");
    const [menu, setMenu] = useState(1);
    const [mounted, setMounted] = useState(false);
    const { page, pathID } = useSelector( state => state.chat);
    const { path, url } = useRouteMatch();

    var Nav;
    if (page.width > 760) {
        Nav = (props) =>
            <div className={`${props.classSelected ? "sidebar__menu--selected" : ""}`} onClick={props.click}>
                {props.children}
            </div>   
    } else {
        Nav = NavLink; 
    }

    useEffect(() => {
        if (page.width <= 760) {
            setMounted(true);
            setTimeout(() => {
                document.querySelector('.sidebar-chat').classList.add('side');
            }, 10);
        };
    }, [chats, mounted]);

    

    

    return (

        <div className="sidebar-chat" style={{
            minHeight: page.width <= 760 ? page.height : "auto"  
        }}>
            <div className="p-3">
                {/* <Myorder /> */}
            </div>
            <div className="sidebar__search">
                <form className="sidebar__search--container border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                    <MdSearch className="ml-3"/>
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
                    to= {`${url}`}
                    click={() => setMenu(1)}
                    activeClassName="sidebar__menu--selected"
                >
                    <div className="sidebar__menu--home text-orange">
                        <MdHome />
                        <div className="sidebar__menu--line"></div>
                    </div>
                </Nav>

                <Nav
                    classSelected={menu === 3 ? true : false}
                    to= {`${url}/users`}
                    click={() => setMenu(3)}
                    activeClassName="sidebar__menu--selected"
                >
                    <div className="sidebar__menu--users text-orange">
                        <MdPeople />
                        <div className="sidebar__menu--line"></div>
                    </div>
                </Nav>
            </div>

            {page.width <= 760 ?
                <>
                    <Switch>
                        <Route path= {`${path}/users`} component= {<div> hello  </div>}>
                            <SidebarChat key="users" fetchList={fetchUsers} dataList={users} title="Users" path= {`${path}/users`} />

                        </Route>
                        <Route path= {`${path}/rooms`} >
                            <SidebarChat key="rooms" fetchList={fetchRooms} dataList={rooms} title="Rooms" path="/rooms" />
                        </Route>
                        <Route path="/search">
                            <SidebarChat key="search" dataList={searchList} title="Search Result" path="/search" />
                        </Route>  
                        <Route path= {path} >
                            <SidebarChat key="chats" dataList={chats} title="Chats" path="/chats" />
                        </Route>
                    </Switch>
                </ >  
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
 
        </div>
    );
};

export default memo(Sidebar);
          