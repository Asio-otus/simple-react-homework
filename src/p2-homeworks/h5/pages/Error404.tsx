import React from "react";
import s from "./pages.module.scss";
import {NavLink} from "react-router-dom";
import {navLinksDataType} from "../bll/navLinksData";
import SvgDead404 from "../../../shared/icon-components/SvgDead404";
import Button from "../../../shared/components/Button/Button";

type Error404PropsType = {
    navData: navLinksDataType
}

const Error404: React.FC<Error404PropsType> = (
    {navData}
) => {
    return (
        <div className={`${s.page} ${s.pageError}`}>
            <SvgDead404 />
            <div className={s.errorPageTitle}>404</div>
            <NavLink to={navData[0].path} className={s.errorPageLink}>
                <Button className={s.linkTitle}>Got to home page</Button>
            </NavLink>
        </div>
    );
}

export default Error404;
