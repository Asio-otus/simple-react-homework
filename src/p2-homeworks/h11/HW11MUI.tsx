import React, {useState} from "react";
import {Subtitle} from "../../components/styled/Subtitle/Subtitle";
import {SuperRangeMUI} from "./common/SuperRangeSingleDouble (MUI)/SuperRangeMUI";

function HW11MUI() {
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
                Task 11 - MUI component
            </Subtitle>
            <div>
                <div>Value 1: {value[0]}</div>
                <div>Value 2: {value[1]}</div>
            </div>
            <div>
                <SuperRangeMUI value={value[0]} onChangeRange={changeInputValue}/>
            </div>
            <div>
                <SuperRangeMUI value={[...value]} onChangeRange={changeInputValue}/>
            </div>
        </div>
    );
}

export default HW11MUI;
