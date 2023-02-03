import React, {ChangeEvent} from 'react';

import s from "./myFriends.module.css"
import {ReduxStoreType} from "../../Redux/reduxStore";
import {addFriendsActionCreator, updateFriendsActionCreator} from "../../Redux/SidebarReducer";


type  MyFriendsPropsType = {
    store: ReduxStoreType
}

export const MyFriends: React.FC<MyFriendsPropsType> = (props) => {

    let state = props.store.getState().sidebar;

    let friendsElements = state.friends.map(el => ` - ${el.friend} - `);

    const addNewFriend = () => {
        props.store.dispatch(addFriendsActionCreator(state.newFriend))

    }

    const newName = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateFriendsActionCreator(e.currentTarget.value))

    }
    return (
        <div className={s.friends}>
            {friendsElements}
            <div><textarea placeholder={"Enter your name"} onChange={newName}
            value={state.newFriend}> </textarea></div>
            <div>
                <button onClick={addNewFriend}> Add Friend</button>
            </div>
        </div>
    );
};

