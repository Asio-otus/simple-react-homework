import React from "react";
import s from "./App.module.scss"
import HW1 from "../../../p2-homeworks/h1/HW1";
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW5 from "../../../p2-homeworks/h5/HW5";

function App() {
    return (
        <div className={s.App}>
            <HW5/>
            {/*<div className={s.container}>*/}
            {/*    <div className={s.header}>*/}
            {/*        <div className={s.title}>React homework</div>*/}
            {/*    </div>*/}
            {/*    <div className={s.homework}>*/}
            {/*        <HW1/>*/}
            {/*    </div>*/}
            {/*    <div className={s.homework}>*/}
            {/*        <HW2/>*/}
            {/*    </div>*/}
            {/*    <div className={s.homework}>*/}
            {/*        <HW3/>*/}
            {/*    </div>*/}
            {/*    <div className={s.homework}>*/}
            {/*        <HW4/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
