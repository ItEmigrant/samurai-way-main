export type friendsType = {
    id: number
    friend: string
}

export type sidebarType = {
    friends: Array<friendsType>

}


let initialSidebarState: sidebarType = {
    friends: [
        {id: 1, friend: "Andre"},
        {id: 2, friend: "Oleg"},
        {id: 3, friend: "Alex"}
    ] as Array<friendsType>

}


export const SidebarReducer = (state = initialSidebarState, action: SidebarActionType) => {
    switch (action.type) {
        case "ADD-FRIENDS":
            const newFriends: friendsType = {
                id: new Date().getTime(),
                friend: action.addNewFriend
            };
            return {
                ...state,
                friends: [...state.friends, newFriends]
            };
        default:
            return state
    }
};

export type SidebarActionType = ReturnType<typeof addFriendsActionCreator>

export const addFriendsActionCreator = (addNewFriend: string) => ({
    type: "ADD-FRIENDS",
    addNewFriend
}) as const





