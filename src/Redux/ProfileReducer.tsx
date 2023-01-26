import React from 'react';
import {ActionsTypes, postsType, profilePageType} from "./state";


const ProfileReducer = (state: profilePageType, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-STATE-POST-MESSAGE":
            const newPost: postsType = {
                id: new Date().getTime(),
                message: state.messageForNewPosts,
                likeCount: 1
            }
            state.posts.push(newPost);
            state.messageForNewPosts = "";

            return state;

        case "UPDATE-NEW-POST-TEXT":
            state.messageForNewPosts = action.postMessage;
            return state;

        default:
            return state;


    }
}

export default ProfileReducer;

export type ProfileActionsType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostActionCreator>

export const addPostActionCreator = (messageForNewPosts: string) => ({
    type: "ADD-STATE-POST-MESSAGE",
    messageForNewPosts: messageForNewPosts
}) as const

export const updateNewPostActionCreator = (postMessage: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    postMessage: postMessage
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

