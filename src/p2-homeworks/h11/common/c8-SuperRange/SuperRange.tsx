import React, {ChangeEvent} from "react";
import Slider from "@material-ui/core/Slider";
import s from './SuperRange.module.scss'
import { StylesProvider } from '@material-ui/core/styles';

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number | number[]) => void
    value: number | number[]
    min?: number
    max?: number
    step?: number
    disabled?: boolean
}

export const SuperRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disabled
    }
) => {

    const onChangeCallback = (e: ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeRange(newValue);
    }

    return (
        <StylesProvider injectFirst>
            <div className={s.sliderContainer}>
                <Slider
                    className={s.slider}
                    value={value}
                    onChange={onChangeCallback}
                    min={min}
                    max={max}
                    step={step}
                    valueLabelDisplay="auto"
                    disabled={disabled}
                />
            </div>
        </StylesProvider>

    );
}
