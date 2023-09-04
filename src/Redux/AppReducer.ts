import {AppThunk} from "./reduxStore";
import {authMeThunkCreator} from "./AuthReducer";


export type AppInitialStateType = {
    initialized: boolean
}
let initialState = {
    initialized: false
}
const AppReducer = (state: AppInitialStateType = initialState, action: AppActionsReducerType): AppInitialStateType => {
    switch (action.type) {
        case "SET-initialized-success":
            return {
                ...state,
                initialized: true

            }
        default:
            return state;
    }
};

export default AppReducer;

export const setInitializedSuccess = () => ({
    type: "SET-initialized-success"
} as const)

export const InitializedAppTC = (): AppThunk =>
    (dispatch) => {
        let promise = dispatch(authMeThunkCreator());
        promise
            .then(() => {
                dispatch(setInitializedSuccess());
            })

    };

//types
export type AppActionsReducerType = ReturnType<typeof setInitializedSuccess>