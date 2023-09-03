import {Dispatch} from "redux";
import {authApi} from "../API/ApiTS";
import {AppActionType, AppThunk} from "./reduxStore";
import {stopSubmit} from "redux-form";


export type AuthStatePropsType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean

}

let initialAuthState: AuthStatePropsType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


export type initialReducerAuthStateType = typeof initialAuthState

const AuthReducer = (state: AuthStatePropsType = initialAuthState, action: AuthActionType):
    initialReducerAuthStateType => {

    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data};
        default:
            return state;
    }
}
export default AuthReducer;

export type AuthActionType =
    ReturnType<typeof setAuthUserData>

export const setAuthUserData = (data: AuthStatePropsType) => ({
    type: "SET-USER-DATA", data
} as const)

export const myLoginThunkCreator = () => {
    return (dispatch: Dispatch<AppActionType>) => {
        return authApi.myLogin()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData({userId: id, login, email, isAuth: true}))
                }
            });
    }

}


export const loginSingIn = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return (dispatch) => {
        authApi.singIn(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(myLoginThunkCreator()) //?????????????????
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Some Error!'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    };
};

export const loginSingUp = (): AppThunk =>
    (dispatch) => {
        authApi.singUp()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData({userId: null, login: null, email: null, isAuth: false}))
                }
            })
    };







