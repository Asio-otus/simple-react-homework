import React from "react";
import HW1 from "../../h1/HW1";
import HW2 from "../../h2/HW2";
import HW3 from "../../h3/HW3";
import HW4 from "../../h4/HW4";
import s from "./pages.module.scss";
import HW7 from "../../h7/HW7";

function Junior() {
    return (
        <div>
            <div className={s.page}>
                <div className={s.header}>
                    <div className={s.title}>Junior tasks</div>
                </div>
                <div className={s.homework}>
                    <HW7/>
                </div>
            </div>

        </div>
    );
}

export default Junior;

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз