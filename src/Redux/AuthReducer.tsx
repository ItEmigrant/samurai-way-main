import React from 'react';

export type AuthStatePropsType = {
    userId: number | null,
    email: string | null,
    login: string | null,

}

let initialAuthState: AuthStatePropsType = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null

}

export type initialReducerAuthStateType = typeof initialAuthState

const AuthReducer = (state: AuthStatePropsType = initialAuthState, action: AuthActionType): initialReducerAuthStateType => {

    switch (action.type) {

        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data

            };

        case "UNFOLLOW-USER":
            return {
                ...state,

            };


        default:
            return state;


    }
}

export default AuthReducer;

export type AuthActionType =
    ReturnType<typeof setUserData>
    | ReturnType<typeof unFollowUser>


export const setUserData = (data: AuthStatePropsType) => ({
    type: "SET-USER-DATA", data
}) as const

export const unFollowUser = () => ({
    type: "UNFOLLOW-USER"

}) as const




