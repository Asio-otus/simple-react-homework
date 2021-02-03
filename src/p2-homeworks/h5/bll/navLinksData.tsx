import {FaBabyCarriage, FaCat, RiGhostFill} from "react-icons/all";
import React from "react";
import PreJunior from "../pages/PreJunior";
import Junior from "../pages/Junior";
import JuniorPlus from "../pages/JuniorPlus";
import SvgGhost from "../../../shared/icon-components/SvgGhost";
import SvgBaby from "../../../shared/icon-components/SvgBaby";
import SvgCat from "../../../shared/icon-components/SvgCat";

export type navLinksDataType = Array<{
    title: string
    path: string
    icon: JSX.Element
    route: JSX.Element
}>

export const navLinksData: navLinksDataType = [
    {
        title: 'Pre junior',
        path: '/pre-junior',
        icon: <SvgGhost/>,
        route: <PreJunior/>
    },
    {
        title: 'Junior',
        path: '/junior',
        icon: <SvgBaby/>,
        route: <Junior/>
    },
    {
        title: 'Junior plus',
        path: '/junior-plus',
        icon: <SvgCat/>,
        route: <JuniorPlus/>
    },
]