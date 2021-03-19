import React, {useState} from "react";
import Affairs from "./Affairs";
import s from "./Affairs.module.scss";
import {Subtitle} from "../../components/styled/Subtitle/Subtitle";

// ---TYPES
export type AffairPriorityType = "low" | "middle" | "high";
export type AffairType = {
    _id: number;
    name: string;
    priority: AffairPriorityType;
};
export type FilterType = "all" | AffairPriorityType;
// TYPES ---

// ---CONSTANTS
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];
// CONSTANTS---

// ---HELPER [PURE-FUNC]
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === "all") return affairs;
    else if (filter === "high") return affairs.filter(a => a.priority === "high");
    else if (filter === "middle") return affairs.filter(a => a.priority === "middle");
    else if (filter === "low") return affairs.filter(a => a.priority === "low");
    else return affairs;
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(a => a._id !== _id);
}
// HELPER [PURE-FUNC]---

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div>
            <Subtitle>
                Task 2
            </Subtitle>
            <div className={s.affairs}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
        </div>
    );
}

export default HW2;
