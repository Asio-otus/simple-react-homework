import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./Button.module.scss";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type buttonStyleType = 'close' | 'red'

type SuperButtonPropsType = DefaultButtonPropsType & {
    buttonStyle?: buttonStyleType
}

const Button: React.FC<SuperButtonPropsType> = (
    {
        buttonStyle, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    let finalClassName  = () => {
        let defaultBtn = `${s.btn} ${className ? className : ""}`
    switch (buttonStyle) {
        case 'close': return  `${defaultBtn} ${s.btnClose}`;
        case 'red': return `${defaultBtn} ${s.btnRed}`;
        default: return `${defaultBtn}`;
        }
    }



    return (
        <button
            className={finalClassName()}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    );
}

export default Button;
