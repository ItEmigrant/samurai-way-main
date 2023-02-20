import React, {ChangeEvent} from 'react';
import s from "./myFriends.module.css"
import {sidebarType} from "../../Redux/store";


type  MyFriendsPropsType = {
    state: sidebarType
    updateFriend: (name: string) => void
    addFriend: () => void
}

export const MyFriends: React.FC<MyFriendsPropsType> = (props) => {

    let friendsElements = props.state.friends.map(el => ` - ${el.friend} - `);

    const addNewFriend = () => {
        props.addFriend();

    }

    const newName = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateFriend(e.currentTarget.value)

    }
    return (
        <div className={s.friends}>
            {friendsElements}
            <div><textarea placeholder={"Enter your name"} onChange={newName}
                           value={props.state.newFriend}> </textarea></div>
            <div>
                <button onClick={addNewFriend}> Add Friend</button>
            </div>
        </div>
    );
};

