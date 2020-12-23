import React from "react";
import {AffairType} from "./HW2";
import s from "./Affairs.module.scss";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType;
    deleteAffairCallback: (id: number) => void;
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};

    return (
        <div>
            <span>{props.affair.name}</span>

            <button className={s.button} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
