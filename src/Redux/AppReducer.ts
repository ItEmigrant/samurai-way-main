import {AppThunk} from "./reduxStore";
import {authMeThunkCreator} from "./AuthReducer";


export type AppInitialStateType = {
    initialized: boolean
    globalError: string | null
}
let initialState = {
    initialized: false,
    globalError: null
}


const AppReducer = (state: AppInitialStateType = initialState, action: AppActionsReducerType): AppInitialStateType => {
    switch (action.type) {
        case "SET-initialized-success":
            return {
                ...state,
                initialized: true
            }

        case "SET_GLOBAL_ERROR":
            return {
                ...state,
                globalError: action.error
            }
        default:
            return state;
    }
};

export default AppReducer;

export const setInitializedSuccess = () => ({
    type: "SET-initialized-success"
} as const)

export const globalError = (error: string | null) => ({
    type: "SET_GLOBAL_ERROR",
    error
}) as const

export const InitializedAppTC = (): AppThunk =>
    (dispatch) => {
        let promise = dispatch(authMeThunkCreator());
        promise
            .then(() => {
                dispatch(setInitializedSuccess());
            })
    };


//types
export type AppActionsReducerType = ReturnType<typeof setInitializedSuccess> | ReturnType<typeof globalError>