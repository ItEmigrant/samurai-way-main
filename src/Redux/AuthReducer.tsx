import React from 'react';

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

const AuthReducer = (state: AuthStatePropsType = initialAuthState, action: AuthActionType): initialReducerAuthStateType => {

    switch (action.type) {

        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true

            };

        default:
            return state;
    }
}

export default AuthReducer;

export type AuthActionType =
    ReturnType<typeof setAuthUserData>


export const setAuthUserData = (data:Omit<AuthStatePropsType, 'isAuth'> ) => ({
    type: "SET-USER-DATA", data
}) as const






