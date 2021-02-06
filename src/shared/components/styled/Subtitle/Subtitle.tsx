import React from "react";
import s from './Subtitle.module.scss'

type SubTitleType = {
    children: string
}

export const Subtitle = (props: SubTitleType) => {
    return (
        <div className={s.subtitle}>
            {props.children}
        </div>
    )
}