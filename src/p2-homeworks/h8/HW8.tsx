import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import Button from "../../components/functional/Button/Button";
import {Subtitle} from "../../components/styled/Subtitle/Subtitle";
import s from './HW8.module.scss'
import {ButtonContainer} from "../../components/styled/ButtonContainer/ButtonContainer";

export type H8UserType = {
    _id: number
    name: string
    age: number
}

export type StateType = Array<H8UserType>

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            {p.name}, {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))

    return (
        <div>
            <Subtitle>
                Task 8
            </Subtitle>

            {/*should work (должно работать)*/}

            {finalPeople}
            <ButtonContainer>
                <Button onClick={sortUp}>sort up</Button>
                <Button onClick={sortDown}>sort down</Button>
                <Button onClick={check18}>check 18</Button>
            </ButtonContainer>


            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativePeople/>*!/*/}
            {/*<hr/>*/}
        </div>
    );
}

export default HW8;
