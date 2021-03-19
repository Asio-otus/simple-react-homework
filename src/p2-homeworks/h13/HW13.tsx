import React, {useState} from "react";
import {Subtitle} from "../../components/styled/Subtitle/Subtitle";
import Button from "../../components/functional/Button/Button";
import Checkbox from "../../components/functional/Checkbox/Checkbox";
import {requestAPI} from "../../api/api";
import s from './HW13.module.scss'

function HW13() {

    return (
        <div>
            <Subtitle>
                Task 13
            </Subtitle>
            <Request/>
        </div>
    )
}

export default HW13;

const Request = () => {

    const [response, setResponse] = useState('');
    const [success, setSuccess] = useState(false);

    const setSuccessfulRequest = () => {
        setSuccess(!success)
    }

    const onButtonClickHandler = () => {
        requestAPI.sendRequest(success)
            .then(res => {
                setResponse(JSON.stringify(res.data['errorText']))
            })
            .catch(error => {
                setResponse(JSON.stringify(error.message))
            })
    }

    return (
        <>
            <div className={s.response}>
                {response}
            </div>
            <div className={s.button}>
                <Button onClick={onButtonClickHandler}>
                    Request data
                </Button>
            </div>
            <div>
                <Checkbox onChange={setSuccessfulRequest}>
                    Successful request
                </Checkbox>
            </div>
        </>
    )
}