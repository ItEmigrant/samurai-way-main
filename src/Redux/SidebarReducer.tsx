import React from 'react';
import {friendsType} from "./store";


let initialSidebarState = {
    newFriend: "",
    friends: [
        {id: 1, friend: "Andre"},
        {id: 2, friend: "Oleg"},
        {id: 3, friend: "Alex"}
    ] as Array<friendsType>

}


export const SidebarReducer = (state = initialSidebarState, action: SidebarActionType) => {
    switch (action.type) {
        case "ADD-FRIENDS": {
            const newFriends: friendsType = {
                id: new Date().getTime(),
                friend: state.newFriend
            };
            let StateCopy = {...state};
            StateCopy.friends = [...state.friends]
            StateCopy.friends.push(newFriends);
            StateCopy.newFriend = "";

            return StateCopy;
        }

        case "UPDATE-FRIENDS": {
            let StateCopy = {...state};
            StateCopy.newFriend = action.friendWithInput;
            return StateCopy;
        }

        default:
            return state
    }

};


export type SidebarActionType =
    ReturnType<typeof addFriendsActionCreator>
    | ReturnType<typeof updateFriendsActionCreator>

export const addFriendsActionCreator = () => ({
    type: "ADD-FRIENDS",

}) as const

export const updateFriendsActionCreator = (friendWithInput: string) => ({
    type: "UPDATE-FRIENDS",
    friendWithInput: friendWithInput
}) as const




