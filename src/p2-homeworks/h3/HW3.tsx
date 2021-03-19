import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import s from "./Greeting.module.scss";
import {Subtitle} from "../../components/styled/Subtitle/Subtitle";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);
    console.log(users)
    const addUserCallback = (user: UserType) => {
        setUsers([...users, user]);
    }

    return (
        <div>
            <Subtitle>
                Task 3
            </Subtitle>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeGreeting/>*!/*/}
            {/*<hr/>*/}
        </div>
    );
}

export default HW3;
