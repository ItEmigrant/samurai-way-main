import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

/*type ProfilePropsType = {
  store:  ReduxStoreType;
}*/

const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
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