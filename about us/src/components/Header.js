import React, {useState} from "react";
import "../styles/Header.css"


function Header(props) {

    // let buttonName = "Some Button";


    return (
        <header>
            <div className="menu__frame">
                <div className="menu__frame-logo">
                    <a href="" className="icon-Logo" aria-label="You can find more information about SkillDrive here"></a>
                </div>
                <nav className="menu__frame-navbar">
                    <div className="menu__frame-navbar-menu">
                        <a href={0} className="menu__frame-navbar-menu-link is-animated"
                           aria-label="You can find more information about Us">О нас</a>
                        <a className="menu__frame-navbar-menu-link is-animated"
                           aria-label="you can find the conditions">Условия</a>
                        <a className="menu__frame-navbar-menu-link is-animated"
                           aria-label="you can find answers to frequently asked questions">Частые вопросы</a>
                    </div>
                    <div className="menu__frame-navbar-enter is-animated">Войти</div>
                </nav>
                <div className="icon-menu is-mobile"></div>
            </div>
        </header>
    )
}

export default Header;