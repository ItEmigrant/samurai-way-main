import React from 'react';
import {ReduxStoreType} from "../../Redux/reduxStore";
import {addFriendsActionCreator, updateFriendsActionCreator} from "../../Redux/SidebarReducer";
import {MyFriends} from "./myFriends";


type  MyFriendsPropsType = {
    store: ReduxStoreType
}

export const MyFriendsContainer: React.FC<MyFriendsPropsType> = (props) => {

    let state = props.store.getState().sidebar;

    const addNewFriend = () => {
        props.store.dispatch(addFriendsActionCreator(state.newFriend))

    }

    const newName = (name:string) => {
        props.store.dispatch(updateFriendsActionCreator(name))

    }
    return (
        <div>
          <MyFriends state={state}
                     updateFriend={newName}
                     addFriend={addNewFriend}
          />
        </div>
    )
}

