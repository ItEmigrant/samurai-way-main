import React from 'react';

export type AuthStatePropsType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean

}

let initialAuthState: AuthStatePropsType = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
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


export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => ({
    type: "SET-USER-DATA", data: {userId, email, login}
}) as const






