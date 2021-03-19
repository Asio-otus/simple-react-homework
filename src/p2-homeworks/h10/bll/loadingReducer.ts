type StartLoadingActionType = {
    type: 'START_LOADING';
}

type StopLoadingActionType = {
    type: 'STOP_LOADING'
}

type ActionType = ReturnType<typeof startLoadingAC>
    | ReturnType<typeof stopLoadingAC>

export type loadingStateType = typeof initState

const initState = {
    loading: false
};

export const loadingReducer = (state = initState, action: ActionType): loadingStateType => {
    switch (action.type) {
        case 'START_LOADING': {
            return {...state, loading: true};
        }
        case 'STOP_LOADING': {
            return {...state, loading: false};
        }
        default:
            return state;
    }
};

export const startLoadingAC = () => {
    return ({type: 'START_LOADING'} as const)
};

export const stopLoadingAC = () => {
    return ({type: 'STOP_LOADING'} as const)
};