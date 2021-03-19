import React from "react";
import s from "./pages.module.scss";
import HW12 from "../../h12/HW12";
import HW13 from "../../h13/HW13";

function JuniorPlus() {
    return (
        <div>
            <div className={s.page}>
                <div className={s.header}>
                    <div className={s.title}>Junior plus tasks</div>
                </div>
                <div className={s.homework}>
                    <HW12/>
                </div>
                <div className={s.homework}>
                    <HW13/>
                </div>
            </div>

        </div>
    );
}

export default JuniorPlus;