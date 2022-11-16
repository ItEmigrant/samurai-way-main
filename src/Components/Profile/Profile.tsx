import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../Redux/state";



type ProfilePropsType = {
    state: profilePageType
    addStatePostMessage: (postMessage:string)=>void

}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                addStatePostMessage={props.addStatePostMessage}
                posts={props.state.posts}/>
        </div>
    );
}

export default Profile;