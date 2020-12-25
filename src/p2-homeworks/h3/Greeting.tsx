import React, {ChangeEvent} from "react";
import s from "./Greeting.module.scss";

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | null
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.inputError : '';

    return (
        <div className={s.greetingContainer}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button className={s.btn} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
