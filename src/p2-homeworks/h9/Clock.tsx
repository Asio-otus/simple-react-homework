import React, {useState} from "react";
import Button from "../../components/functional/Button/Button";
import {ButtonContainer} from "../../components/styled/ButtonContainer/ButtonContainer";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const stringTime = date ? date.toLocaleTimeString() : ''; // fix with date
    const stringDate = date ? date.toLocaleDateString() : ''; // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <ButtonContainer>
                <Button onClick={start}>start</Button>
                <Button onClick={stop}>stop</Button>
            </ButtonContainer>

        </div>
    );
}

export default Clock;
