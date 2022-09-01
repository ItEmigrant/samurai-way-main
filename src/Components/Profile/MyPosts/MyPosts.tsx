import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";

const MyPosts = () => {
    return <div>
        My post
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post message="Hi, how are you?" like="15 likes"/>
            <Post message='My first post!' like="25 likes"/>

        </div>
    </div>
};

export default MyPosts;