
export type ThemeColorType = 'pink' | 'green' | 'blue' | 'orange'

export type ThemeStateType = {
    themeColor: ThemeColorType
    darkMode: boolean
}

type ActionType = ReturnType<typeof changeThemeColor>
    | ReturnType<typeof setDarkMode>

const initState: ThemeStateType = {
    themeColor: 'pink',
    darkMode: false
}

export const themeReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE_THEME_COLOR': {
            return {...state, themeColor: action.themeColor}
        }
        case 'SET_DARK_MODE': {
            return {...state, themeColor: action.darkModeOn}
        }
        default:
            return state;
    }
}

export const changeThemeColor = (themeColor: ThemeColorType) => {
    return ({type: 'CHANGE_THEME_COLOR', themeColor} as const)
}

export const setDarkMode = (darkModeOn: boolean) => {
    return ({type: 'SET_DARK_MODE', darkModeOn} as const)
}