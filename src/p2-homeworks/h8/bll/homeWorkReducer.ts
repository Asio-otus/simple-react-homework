export const homeWorkReducer = (state: any, action: any): any => {

    function compare(a: any, b: any) {
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

    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                let newArr = state.sort(compare)
                return [...newArr]
            } else if (action.payload === "down") {
                return state.sort(compare)
            }
            return state
        }
        case "check": {

            return state
        }
        default:
            return state
    }
};