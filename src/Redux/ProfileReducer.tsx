import React from 'react';
import {ActionsTypes, postsType, profilePageType} from "./store";

let initialReducerState = {
    messageForNewPosts: "",
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 1},
        {id: 2, message: "My first post!", likeCount: 25},
        {id: 3, message: "Post!", likeCount: 5},
        {id: 4, message: "yo!", likeCount: 20}
    ]
}



const ProfileReducer = (state:profilePageType = initialReducerState, action: ActionsTypes) => {

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

