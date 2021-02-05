import React, {ChangeEvent, useState} from "react";
import s from "./HW4.module.scss";
import InputText from "../../shared/components/InputText/InputText";
import Button from "../../shared/components/Button/Button";
import Checkbox from "../../shared/components/Checkbox/Checkbox";

function HW4() {
    const [text, setText] = useState<string>("");
    const error = text ? "" : "error";
    const showAlert = () => {
        if (error) {
            alert("введите текст...");
        } else {
            alert(text); // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div>
            <div className={s.subTitle}>homeworks - 4</div>

            <div>
                <div className={s.column}>
                    {/*should work (должно работать)*/}
                    <InputText
                        value={text}
                        onChangeText={setText}
                        onEnter={showAlert}
                        error={error}
                        className={s.blue} // проверьте, рабоет ли смешивание классов
                    />

                    {/*should work (должно работать)*/}
                    <Button
                        buttonStyle={'red'}
                        onClick={showAlert}
                    >
                        delete {/*// название кнопки попадёт в children*/}
                    </Button>

                    {/*should work (должно работать)*/}
                    <Checkbox
                        checked={checked}
                        onChangeChecked={setChecked} // ???
                        onChange={testOnChange}
                    >
                        some text {/*// этот текст попадёт в children*/}
                    </Checkbox>

                    {/*// onChange тоже должен работать*/}
                    <Checkbox checked={checked} onChange={testOnChange}/>
                </div>

                {/*<hr/>*/}
                {/*/!*для личного творчества, могу проверить*!/*/}
                {/*/!*<InputTextAlt/>*!/*/}
                {/*/!*<ButtonAlt/>*!/*/}
                {/*/!*<CheckboxAlt/>*!/*/}
                {/*<hr/>*/}
            </div>
            </div>
    );
}

export default HW4;
