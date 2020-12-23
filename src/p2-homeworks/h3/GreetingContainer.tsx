import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";
import {v1} from "uuid";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (user: UserType) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string | null>("");

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError('');
        setName(e.currentTarget.value);
    };
    const addUser = () => {
        if (name.trim() !== '') {
            alert(`Hello ${name}!`);
            addUserCallback({_id: v1(), name: name.trim()})
            setName('');
        } else {
            setError('Write your name please. I know you have one ;)')
        }
    };

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
