import React from 'react';

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../../Redux/reduxStore";



type ProfilePropsType = {
  store:  ReduxStoreType;

}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
               /* messageForNewPosts={props.messageForNewPosts}
               /!* addStatePostMessage={props.addStatePostMessage}*!/
                posts={props.state.posts}
               /!* updateNewPostText={props.updateNewPostText}*!/
                dispatch={props.dispatch}*/
            />
        </div>
    );
}

export default Profile;