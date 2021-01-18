import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import s from "./Greeting.module.scss";

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
            <div className={s.subTitle}>Homework - 3</div>

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
