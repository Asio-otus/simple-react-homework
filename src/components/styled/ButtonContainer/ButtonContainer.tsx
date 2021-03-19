import React from "react";
import s from './ButtonContainer.module.scss'

type ButtonContainerType = {
    children: JSX.Element[]
}

export const ButtonContainer = (props: ButtonContainerType) => {
    return (
        <div className={s.buttonContainer}>
            {props.children}
        </div>
    )
}