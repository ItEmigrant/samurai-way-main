import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/ProfileReducer";


/*type ProfilePropsType = {
  store:  ReduxStoreType;
}*/
type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void

}

const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
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