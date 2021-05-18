import React from 'react'
import MenuMain from '../menu/Menu'
import { Link, withRouter } from "react-router-dom";
import './Header.scss'
import Logo from '../../assets/Logo 1 white gif.gif'

function Header() {
    return (
        <div className="header container">
            <div className="header wrapper">
                <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt="lenx"/>
                    </Link>
                </div>
                <dic>
                    <MenuMain />
                </dic>
            </div>
        </div>
    )
}

export default withRouter(Header);
