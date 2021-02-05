import React from "react";
import s from "./pages.module.scss";
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";

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
                <div className={s.homework}>
                    <HW8/>
                </div>
            </div>

        </div>
    );
}

export default Junior;

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз