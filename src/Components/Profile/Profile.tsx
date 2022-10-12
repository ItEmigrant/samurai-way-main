import React from 'react';

import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../index";

type ProfilePropsType = {
    posts: Array<postsType>
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}/>
        </div>
    );
}

export default Profile;