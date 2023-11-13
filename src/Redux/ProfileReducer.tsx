import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {profileApi, userApi} from "../API/ApiTS";
import {AppActionType, AppThunk} from "./reduxStore";
import {stopSubmit} from "redux-form";


export type postsType = {
    id: number
    message: string
    likeCount: number
}
export type  profilePageType = {
    messageForNewPosts: string
    posts: Array<postsType>
    profile: ProfileType
    status: string


}

export type ProfileType = {
    aboutMe: string
    contacts: profileContactsType
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName: string
    userId: number
    photos: profilePhotosType
    error: string | null


}
export type profilePhotosType = {
    small: string
    large: string
}
export type profileContactsType = {
    [key: string]: string;
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
    profile: null as any,
    status: ''
}

const ProfileReducer = (state: profilePageType = initialReducerState, action: ActionsTypes): profilePageType => {

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
        case "SAVE-PHOTO-SUCCESS": {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        case "SAVE-PROFILE-SUCCESS": {
            return {
                ...state,
                profile: action.profile
            }
        }

        case 'SET_ERROR':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    error: action.error
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
    ReturnType<typeof deletePostActionCreator> |
    ReturnType<typeof savePhotoSuccess> |
    ReturnType<typeof saveProfileSuccess> |
    ReturnType<typeof setProfileError>

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


export const getUsersForProfile = (userId: string): AppThunk => {
    return async (dispatch: Dispatch<AppActionType>) => {
        let data = await userApi.getUsersForProfile(userId);
        dispatch(setUserProfile(data))
    }
}

export const setStatus = (status: string) => ({
    type: "SET-STATUS",
    status
}) as const

export const savePhotoSuccess = (photos: profilePhotosType) => ({
    type: "SAVE-PHOTO-SUCCESS",
    photos
}) as const

export const saveProfileSuccess = (profile: ProfileType) => ({
    type: "SAVE-PROFILE-SUCCESS",
    profile
}) as const

export const setProfileError = (error: string|null) => ({
    type: "SET_ERROR",
    error
}) as const

export const getStatus = (userId: string) => {
    return async (dispatch: Dispatch) => {
        let data = await profileApi.getStatus(userId);
        dispatch(setStatus(data.data))
    }
}

export const savePhoto = (file: File) => {
    return async (dispatch: Dispatch) => {
        let res = await profileApi.savePhoto(file);
        if (res.resultCode === 0) {
            dispatch(savePhotoSuccess(res.data.photos))
        }
    }
}

export const saveProfile = (profile: ProfileType): AppThunk => {
    return async (dispatch, getState) => {
        const userID = getState().auth.userId
        const res = await profileApi.saveProfile(profile);
        if (res.resultCode === 0) {
            dispatch(getUsersForProfile(String(userID)))
        } else {
            let message: string = res.messages.length > 0 ? res.messages[0] : 'Some Error!'
            dispatch(stopSubmit('edit-profile', {_error: message}))
            return Promise.reject(res.messages[0])
        }
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch) => {
        let res = await profileApi.updateStatus(status);
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        } else {
            let message: string = res.data.messages.length > 0 ? res.data.messages[0] : 'Some Error!'
            dispatch(setProfileError(message))
            setTimeout(() => {
                dispatch(setProfileError(null))
            }, 5000);
        }

    }
}