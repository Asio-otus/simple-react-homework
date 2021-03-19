import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from './Affairs.module.scss'
import Button from "../../components/functional/Button/Button";

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
            priority={a.priority}
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
                <Button className={s.btn} onClick={setAll}>All</Button>
                <Button className={s.btn} onClick={setHigh}>High</Button>
                <Button className={s.btn} onClick={setMiddle}>Middle</Button>
                <Button className={s.btn} onClick={setLow}>Low</Button>
            </div>
        </div>
    );
}

export default Affairs;
