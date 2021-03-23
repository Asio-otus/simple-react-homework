import React, {useState} from "react";
import {Subtitle} from "../../components/styled/Subtitle/Subtitle";
import SliderCustom from "./common/SuperRange/SliderCustom";
import RangeSlider from "./common/SuperDoubleRange/RangeSlider";

export function HW11() {
    // Singles slider state
    const [value, setValue] = useState(0);

    // Double slider state
    const [values, setValues] = useState([0, 100]);

    const changeInputValue = (newValue: number) => {
        setValue(newValue)
    }

    const changeRangeInputValues = (values: Array<number>) => {
        setValues(values)
    }

    return (
        <div>
            <Subtitle>
                Task 11
            </Subtitle>
            <div>
                <div>Value: {value}</div>
            </div>
            {/*<div>*/}
            {/*    <SliderCustom value={value} onChangeRange={changeInputValue}/>*/}
            {/*</div>*/}
            <div>
                <RangeSlider values={value} onChangeRange={changeInputValue}/>
            </div>
            <div>
                <div>Values: {values}</div>
            </div>
            <div>
                <RangeSlider values={values} onChangeRange={changeRangeInputValues}/>
            </div>
        </div>
    );
}
