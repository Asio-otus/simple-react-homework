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
    const inputClass = error ? s.textInputError : '';

    return (
        <div>
            <div className={s.greetingContainer}>
                <input value={name} onChange={setNameCallback} className={`${inputClass} ${s.textInput}`}/>
                <button className={`${s.btn} ${s.marginLeft1}`} onClick={addUser}>add</button>
                <span className={s.marginLeft1}>Users count: {totalUsers}</span>
            </div>
            <div className={s.paddingTop1}>{error}</div>
        </div>
    );
}

export default Greeting;
