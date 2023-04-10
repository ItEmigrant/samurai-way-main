import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/ProfileReducer";


/*type ProfilePropsType = {
  store:  ReduxStoreType;
}*/
type ProfilePropsType = {
    profile:ProfileType | null
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer

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