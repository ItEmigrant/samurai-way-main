import {Dispatch} from "redux";
import {authApi} from "../API/ApiTS";
import {AppActionType, AppThunk} from "./reduxStore";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "AuthReducer/SET-USER-DATA"

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
        case SET_USER_DATA:
            return {...state, ...action.data};
        default:
            return state;
    }
}
export default AuthReducer;

export type AuthActionType =
    ReturnType<typeof setAuthUserData>

export const setAuthUserData = (data: AuthStatePropsType) => ({
    type: SET_USER_DATA, data
} as const)


export const authMeThunkCreator = () => { //authMy
    return async (dispatch: Dispatch<AppActionType>) => {
        let data = await authApi.myLogin();
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData({userId: id, login, email, isAuth: true}))
        }
    }
}


export const loginSingIn = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return async (dispatch) => {
        let res = await authApi.singIn(email, password, rememberMe)
        if (res.resultCode === 0) {
            await dispatch(authMeThunkCreator())
        } else {
            let message: number = res.messages.length > 0 ? res.data.messages[0] : 'Some Error!'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}

export const loginSingUp = (): AppThunk => {
    return async (dispatch) => {
        let data = await authApi.singUp();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData({userId: null, login: null, email: null, isAuth: false}))
        }
    }
};







