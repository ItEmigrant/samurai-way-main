import React from 'react';
import s from "./myFriends.module.css"
import {CommonSidebarType} from "./myFriendsContainer";
import {FormDataAddFriendType, ReduxAddFriendForm} from "./AddFriendsForm";

export const MyFriends: React.FC<CommonSidebarType> = (props) => {

    let friendsElements = props.sidebar.friends.map( el => <span key={el.id}>- {el.friend} - </span>);

    const addNewFriend = (values: FormDataAddFriendType) => {
        props.addFriend(values.addNewFriend);
    }


    return (
        <div className={s.friends}>
            {friendsElements}
            <div>
                <ReduxAddFriendForm onSubmit={addNewFriend}/>
            </div>

        </div>

    );
};

