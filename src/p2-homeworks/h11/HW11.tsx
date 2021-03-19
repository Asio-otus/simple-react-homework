import React, {useState} from "react";
import {Subtitle} from "../../components/styled/Subtitle/Subtitle";
import {SuperRange} from "./common/c8-SuperRange/SuperRange";

function HW11() {
    const [value, setValue] = useState<number[]>([0, 100]);

    const changeInputValue = (newValue: number | number[]) => {
        if (typeof newValue === "number") {
            setValue([newValue, value[1]])
        } else {
            setValue(newValue)
        }
    }

    return (
        <div>
            <Subtitle>
                Task 11
            </Subtitle>
            <div>
                <div>Value 1: {value[0]}</div>
                <div>Value 2: {value[1]}</div>
            </div>
            <div>
                <SuperRange value={value[0]} onChangeRange={changeInputValue}/>
            </div>
            <div>
                <SuperRange value={[...value]} onChangeRange={changeInputValue}/>
            </div>
        </div>
    );
}

export default HW11;
