import React from 'react';
import {friendsType, sidebarType} from "./store";


let initialSidebarState = {
    friends: [
        {id: 1, friend: "Andre"},
        {id: 2, friend: "Oleg"},
        {id: 3, friend: "Alex"}
    ],
    newFriend: "",
}


export const SidebarReducer = (state: sidebarType = initialSidebarState, action: SidebarActionType) => {
    switch (action.type) {
        case "ADD-FRIENDS":
            const newFriends: friendsType = {
                id: new Date().getTime(),
                friend: state.newFriend
            };
            state.friends.push(newFriends);
            state.newFriend = "";

            return state

        case "UPDATE-FRIENDS":
            state.newFriend = action.friendWithInput;
            return state

        default:
            return state
    }


};


export type SidebarActionType =
    ReturnType<typeof addFriendsActionCreator>
    | ReturnType<typeof updateFriendsActionCreator>

export const addFriendsActionCreator = (newFriend: string) => ({
    type: "ADD-FRIENDS",
    newAddFriend: newFriend
}) as const

export const updateFriendsActionCreator = (friendWithInput: string) => ({
    type: "UPDATE-FRIENDS",
    friendWithInput: friendWithInput
}) as const




