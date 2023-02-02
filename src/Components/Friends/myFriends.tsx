import React from 'react';
import {friendsType} from "../../Redux/store";
import s from "./myFriends.module.css"


type  MyFriendsPropsType = {
    state: Array<friendsType>
}

export const MyFriends: React.FC<MyFriendsPropsType> = (props) => {

    const addNewFriend =()=> {
            props.state.map(el=>el)
    }
    return (
        <div className={s.friends}>
            {props.state.map(el=> el.friend)}
            <div> <button onClick={addNewFriend}> Add Friend</button></div>
        </div>
    );
};

