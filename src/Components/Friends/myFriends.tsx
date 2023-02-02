import React from 'react';
import {friendsType} from "../../Redux/store";
import s from "./myFriends.module.css"


type  MyFriendsPropsType = {
    state: Array<friendsType>
}

export const MyFriends: React.FC<MyFriendsPropsType> = (props) => {
    return (
        <div className={s.friends}>
            {props.state.map(el=> el.friend)}
        </div>
    );
};

