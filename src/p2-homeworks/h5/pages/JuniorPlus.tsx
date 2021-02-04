import React from "react";
import HW1 from "../../h1/HW1";
import HW2 from "../../h2/HW2";
import HW3 from "../../h3/HW3";
import HW4 from "../../h4/HW4";
import s from "./pages.module.scss";

function JuniorPlus() {
    return (
        <div>
            <div className={s.page}>
                <div className={s.header}>
                    <div className={s.title}>Junior plus tasks</div>
                </div>
                <div className={s.homework}>
                    <HW1/>
                </div>
                <div className={s.homework}>
                    <HW2/>
                </div>
                <div className={s.homework}>
                    <HW3/>
                </div>
                <div className={s.homework}>
                    <HW4/>
                </div>
            </div>

        </div>
    );
}

export default JuniorPlus;