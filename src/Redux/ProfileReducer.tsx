import React from 'react';
import {ActionsTypes, postsType, profilePageType} from "./state";

const ProfileReducer = (state: profilePageType, action: ActionsTypes) => {


    if (action.type === "ADD-STATE-POST-MESSAGE") {

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

};

export default ProfileReducer;