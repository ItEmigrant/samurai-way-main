import React from 'react';

export type usersType = {
    id: number,
    fullName: string,
    status: string,
    followed: boolean,
    location: { country: string, city: string }
}

export type  UserPageType = {
    users: Array<usersType>
}


let initialUsersState: UserPageType = {
    users: [
        /* {
             id: 1,
             followed: true,
             fullName: "Bogus Sol",
             status: "I am a boss",
             location: {country: "Poland", city: "Krakow"}
         },
         {
             id: 2,
             followed: false,
             fullName: "Alisa Kas",
             status: "I am a manager",
             location: {country: "Poland", city: "Warshaw"}
         },
         {
             id: 3,
             followed: true,
             fullName: "Artur Mar",
             status: "I am a developer",
             location: {country: "Ukraine", city: "Kiev"}
         },
         {
             id: 4,
             followed: false,
             fullName: "Tom Tai",
             status: "I am a driver",
             location: {country: "USA", city: "New York"}
         },
 */
    ] as Array<usersType>
}

export type initialReducerUsersStateType = typeof initialUsersState
const UserReducer = (state: UserPageType = initialUsersState, action: UsersActionType): initialReducerUsersStateType => {

    switch (action.type) {
        case "FOLLOW-USER":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)

            };

        case "UNFOLLOW-USER":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            };

        case "SET-USERS":
            return {
                ...state, users: [...state.users, ...action.users]
            };

        default:

            return state;


    }
}

export default UserReducer;

export type UsersActionType =
    ReturnType<typeof followUserActionCreator>
    | ReturnType<typeof unFollowUserActionCreator> | ReturnType<typeof setUsersActionCreator>


export const followUserActionCreator = (userID: number) => ({
    type: "FOLLOW-USER", userID

}) as const

export const unFollowUserActionCreator = (userID: number) => ({
    type: "UNFOLLOW-USER", userID

}) as const

export const setUsersActionCreator = (users: Array<usersType>) => ({
    type: "SET-USERS", users
}) as const
