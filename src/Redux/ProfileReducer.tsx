import React from 'react';
import {ActionsTypes} from "./store";

export type postsType = {
    id: number
    message: string
    likeCount: number
}
export type  profilePageType = {
    messageForNewPosts: string
    posts: Array<postsType>
    profile: ProfileType | null
}

export type ProfileType = {
    aboutMe:string
    contacts: profileContactsType
    lookingForAJob:boolean
    lookingForAJobDescription:string
    fullName: string
    userId: number
    photos: profilePhotosType



}
export type profilePhotosType = {
    small: string
    large: string
}
export type profileContactsType = {
    skype:string
    vk: string,
    facebook: string,
    icq: string,
    email: string,
    googlePlus: string,
    twitter: string,
    instagram: string,
    whatsApp: string
}


let initialReducerState: profilePageType  = {
    messageForNewPosts: "",
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 1},
        {id: 2, message: "My first post!", likeCount: 25},
        {id: 3, message: "Post!", likeCount: 5},
        {id: 4, message: "yo!", likeCount: 20}
    ],
    profile: null
}

const ProfileReducer = (state: profilePageType = initialReducerState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-STATE-POST-MESSAGE":
            const newPost: postsType = {
                id: new Date().getTime(),
                message: state.messageForNewPosts,
                likeCount: 1
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPosts: ""
            };

        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                messageForNewPosts: action.postMessage
            };
        }

        case "SET-USER-PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state;
    }
}

export default ProfileReducer;

export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostActionCreator> |
    ReturnType<typeof setUserProfile>

export const addPostActionCreator = () => ({
    type: "ADD-STATE-POST-MESSAGE"
}) as const

export const updateNewPostActionCreator = (postMessage: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    postMessage
}) as const

export const setUserProfile = (profile: ProfileType) => ({
    type: "SET-USER-PROFILE",
    profile
}) as const


/*if (action.type === "ADD-STATE-POST-MESSAGE") {
            const newPost: postsType = {
        id: new Date().getTime(),
        message: state.messageForNewPosts,
        likeCount: 1
    };
    state.posts.push(newPost);
    state.messageForNewPosts = "";



} else if (action.type === "UPDATE-NEW-POST-TEXT") {
    state.messageForNewPosts = action.postMessage;

}

return state;

};*/

