import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../Redux/state";



type ProfilePropsType = {
    messageForNewPosts:string
    state: profilePageType
    addStatePostMessage: (postMessage:string)=>void
    updateNewPostText: (postMessage:string)=>void

}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                messageForNewPosts={props.messageForNewPosts}
                addStatePostMessage={props.addStatePostMessage}
                posts={props.state.posts}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;