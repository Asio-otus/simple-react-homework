import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from './Affairs.module.scss'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>;
    setFilter: (filter: FilterType) => void;
    deleteAffairCallback: (id: number) => void;
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')};
    const setHigh = () => {props.setFilter('high')};
    const setMiddle = () => {props.setFilter('middle')};
    const setLow = () => {props.setFilter('low')};

    return (
        <div>

            {mappedAffairs}
            <div className={s.filterWrapper}>
                <button className={s.btn} onClick={setAll}>All</button>
                <button className={s.btn} onClick={setHigh}>High</button>
                <button className={s.btn} onClick={setMiddle}>Middle</button>
                <button className={s.btn} onClick={setLow}>Low</button>
            </div>
        </div>
    );
}

export default Affairs;
