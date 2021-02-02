import React, {ChangeEvent} from "react";
import s from "./Greeting.module.scss";
import InputText from "../../shared/components/InputText/InputText";
import Button from "../../shared/components/Button/Button";

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | undefined
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
                <InputText value={name} onChange={setNameCallback} error={error}/>
                <div>
                    <Button className={s.marginLeft1} onClick={addUser}>add</Button>
                    <span className={s.marginLeft1}>Users count: {totalUsers}</span>
                </div>
                {/*<input value={name} onChange={setNameCallback} className={`${inputClass} ${s.textInput}`}/>*/}
                {/*<button className={`${s.btn} ${s.marginLeft1}`} onClick={addUser}>add</button>*/}
            </div>
            {/*<div className={s.paddingTop1}>{error}</div>*/}
        </div>
    );
}

export default Greeting;
