import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {profileApi, userApi} from "../API/ApiTS";

export type postsType = {
    id: number
    message: string
    likeCount: number
}
export type  profilePageType = {
    messageForNewPosts: string
    posts: Array<postsType>
    profile: ProfileType | null
    status: string
}

export type ProfileType = {
    aboutMe: string
    contacts: profileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: profilePhotosType


}
export type profilePhotosType = {
    small: string
    large: string
}
export type profileContactsType = {
    skype: string
    vk: string,
    facebook: string,
    icq: string,
    email: string,
    googlePlus: string,
    twitter: string,
    instagram: string,
    whatsApp: string
}


let initialReducerState: profilePageType = {
    messageForNewPosts: "",
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 1},
        {id: 2, message: "My first post!", likeCount: 25},
        {id: 3, message: "Post!", likeCount: 5},
        {id: 4, message: "yo!", likeCount: 20}
    ],
    profile: null,
    status: ''
}

const ProfileReducer = (state: profilePageType = initialReducerState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-STATE-POST-MESSAGE":
            const newPost: postsType = {
                id: new Date().getTime(),
                message: action.NewPostBody,
                likeCount: 1
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case "DELETE-POST-MESSAGE":
            return {
                ...state,
                posts: state.posts.filter(m => m.id !== action.id)
            }
        case "SET-USER-PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        case "SET-STATUS": {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;
    }
}

export default ProfileReducer;
export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus> |
    ReturnType<typeof deletePostActionCreator>

export const addPostActionCreator = (NewPostBody: string) => ({
    type: "ADD-STATE-POST-MESSAGE",
    NewPostBody
}) as const

export const deletePostActionCreator = (id: number) => ({
    type: "DELETE-POST-MESSAGE",
    id

}) as const

export const setUserProfile = (profile: ProfileType) => ({
    type: "SET-USER-PROFILE",
    profile
}) as const


export const getUsersForProfile = (userId: string) => {
    return async (dispatch: Dispatch) => {
        let data = await userApi.getUsersForProfile(userId);
        dispatch(setUserProfile(data))
    }
}

export const setStatus = (status: string) => ({
    type: "SET-STATUS",
    status
}) as const

export const getStatus = (userId: string) => {
    return async (dispatch: Dispatch) => {
        let data = await profileApi.getStatus(userId);
        dispatch(setStatus(data.data))
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch) => {
        let res = await profileApi.updateStatus(status);
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}