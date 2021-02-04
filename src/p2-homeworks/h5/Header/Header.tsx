import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.scss"
import {navLinksDataType} from "../bll/navLinksData";
import SvgChick from "../../../shared/icon-components/SvgChick";

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

    const burgerStyle = () => {
        return !navClosed ? `${s.burger} ${s.burgerOpen}` : `${s.burger}`
    }

    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.headerLogo}>
                    <SvgChick className={s.headerIcon}/>
                    <div className={s.headerTitle}>React tasks</div>
                </div>
                <div className={burgerStyle()} onClick={toggleNavbar}>
                    <div className={s.burgerLine}/>
                </div>
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
