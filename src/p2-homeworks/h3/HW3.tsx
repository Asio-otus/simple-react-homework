import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";

// types
export type UserType = {
    _id: string
    name: string
    length?: number
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
            <hr/>
            homeworks 3

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
