import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.scss"
import {FaBars} from "react-icons/all";
import {navLinksDataType} from "../bll/navLinksData";

type HeaderPropsType = {
    navData: navLinksDataType
}

const Header: React.FC<HeaderPropsType> = (
    {navData}
) => {
    const [navClosed, setNavClosed] = useState<boolean>(true)

    const toggleNavbar = () => {
        setNavClosed(!navClosed);
    }

    const navbarStyle = () => {
        return navClosed ? `${s.nav} ${s.navClosed}` : `${s.nav}`
    }

    return (
        <div className={s.header}>
            <div className={s.burger} onClick={toggleNavbar}>
                <FaBars/>
            </div>
            <nav className={navbarStyle()}>

                {navData.map(nav =>
                    <div className={s.navItem}>
                        <NavLink to={nav.path} className={s.link}>
                            <span className={s.linkIcon}>{nav.icon}</span>
                            <span className={s.linkTitle}>{nav.title}</span>
                        </NavLink>
                    </div>)}
            </nav>
        </div>
    );
}

export default Header;
