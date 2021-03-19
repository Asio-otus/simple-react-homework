import React from "react";
import AlternativeMessage from "./AlternativeMessage";
import Message from "./Message";
import s from './Message.module.scss'
import {Subtitle} from "../../components/styled/Subtitle/Subtitle";

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Mark Kadiner",
    message: "Not the most elegant solution with the SVG. I will try to figure out a better way to refactor it in a real project",
    time: "22:00",
};

function HW1() {
    return (
        <div>
            <Subtitle>
                Task 1
            </Subtitle>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage/>
        </div>
    );
}

export default HW1;