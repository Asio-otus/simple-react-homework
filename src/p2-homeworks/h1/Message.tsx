import React from "react";
import style from "./Message.module.scss";

type PropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: PropsType) {
    return (
        <div className={style.wrapper}>
            <img className={style.avatar} src={props.avatar} alt="Avatar"/>
            <div className={style.messageBubble}>
                <svg className={style.messageBubble_tail}
                     baseProfile="full"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.96 79.43">
                    <path
                        d="M48.35,79.43H2.89c-2.99,0-4.01-3.97-1.39-5.42c16.98-9.43,46.85-32,46.85-74.01h5.61v79.43H48.35z"/>
                </svg>
                <div className={style.name}>
                    {props.name}
                </div>
                <div className={style.message}>
                    {props.message}
                </div>
                <div className={style.time}>
                    {props.time}
                </div>
            </div>
        </div>
    );
}

export default Message;
