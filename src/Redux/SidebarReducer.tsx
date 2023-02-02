import React from 'react';
import {friendsType, sidebarType,} from "./store";


let initialSidebarState = {
newFriend: "Bogdan",
    friends: [

        {id: 1, friend: "Andre"},
        {id: 2, friend: "Oleg"},
        {id: 3, friend: "Alex"}

    ]
}


export const SidebarReducer = (state: sidebarType = initialSidebarState, action:SidebarActionType) => {
    switch (action.type) {
        case "ADD-FRIENDS":
            const newFriends: friendsType = {
                id:new Date().getTime(),
                friend: "Bogdan"
            };
            state.friends.push(newFriends);

          return   state

        default:
          return  state
    }




};


export type SidebarActionType = ReturnType<typeof updateFriendsActionCreator>

export const updateFriendsActionCreator = (newFriend:string) => ({
    type: "ADD-FRIENDS",
    friend: newFriend

}) as const




