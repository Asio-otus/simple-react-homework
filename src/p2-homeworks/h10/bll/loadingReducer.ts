type StartLoadingActionType = {
    type: 'START_LOADING';
}

type StopLoadingActionType = {
    type: 'STOP_LOADING'
}

type ActionType = StartLoadingActionType | StopLoadingActionType

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
        default: return state;
    }
};

export const startLoadingAC = (): StartLoadingActionType => {
    return {type: 'START_LOADING'}
};

export const stopLoadingAC = (): StopLoadingActionType => {
    return {type: 'STOP_LOADING'}
};