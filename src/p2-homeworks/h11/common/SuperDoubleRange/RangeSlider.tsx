import React from "react";
import ReactSlider from "react-slider";
import s from "./RangeSlider.module.scss"

type SuperDoubleRangePropsType = {
    onChangeRange?: any
    values?: any
    // min, max, step, disable, ...
}

const RangeSlider: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, values,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <ReactSlider
            className={s.styledSlider}
            defaultValue={values}
            onChange={onChangeRange}
            thumbClassName={s.styledThumb}
            trackClassName={s.styledTrack}
            // renderTrack={Track}
            // renderThumb={Thumb}
        />
    );
}
// ReactSlider docs https://zillow.github.io/react-slider/#reactslider

// const StyledSlider = styled(ReactSlider)`
//   width: 100%;
//   height: 5px;
// `
//
// const StyledThumb = styled.div`
//   height: 15px;
//   width: 15px;
//   background-color: pink;
//   margin-top: -5px;
//   border-radius: 50%;
//   cursor: grab;
//   color: transparent;
// `
//
// const Thumb = (props: any, state: any) => <div className={s.styledThumb} {...props}>{state.valueNow}</div>;
//
// const StyledTrack = styled.div`
//   background: tomato;
//   height: 5px;
// `
//
// const Track = (props: any, state: any) => <div className={s.styledTrack} {...props} index={state.index}/>;

export default RangeSlider;
