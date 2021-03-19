import axios from "axios";

const instance = axios.create ({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})

export const requestAPI = {
    sendRequest(success: boolean) {
        return instance.post<any>('auth/test', {success})
    }
}