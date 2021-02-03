import React from "react";
import Header from "./Header/Header";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";
import {navLinksData} from "./bll/navLinksData";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header navData={navLinksData}/>
                <Routes navData={navLinksData}/>
            </HashRouter>
        </div>
    );
}

export default HW5;
