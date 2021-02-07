import {StateType, H8UserType} from "../HW8";

export const homeWorkReducer = (state: StateType, action: any): any => {

    function compareUp(a: H8UserType, b: H8UserType) {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()

        let comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        } else if (nameA < nameB) {
            comparison = -1;
        }
        return comparison
    }

    function compareDown(a: H8UserType, b: H8UserType) {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()

        let comparison = 0;
        if (nameA > nameB) {
            comparison = -1;
        } else if (nameA < nameB) {
            comparison = 1;
        }
        return comparison
    }

    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                return [...state.sort(compareUp)]
            } else if (action.payload === "down") {
                return [...state.sort(compareDown)]
            }
            return state
        }
        case "check": {
            return [...state.filter(obj => obj.age >= action.payload)]
        }
        default:
            return state
    }
};