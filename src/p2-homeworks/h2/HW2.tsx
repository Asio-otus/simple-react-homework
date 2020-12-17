import React, {useState} from "react";
import Affairs from "./Affairs";

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
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): any => { // need to fix any
    if (filter === "all") return affairs;
    else return; // need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): any => { // need to fix any
    return; // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: any) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

    return (
        <div>
            <hr/>
            homework 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    );
}
// HELPER [PURE-FUNC]---

export default HW2;
