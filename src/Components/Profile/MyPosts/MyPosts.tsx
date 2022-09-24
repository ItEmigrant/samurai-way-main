import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";

const MyPosts = () => {
    return <div className={s.MyPostsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post message="Hi, how are you?" likeCount="0 "/>
            <Post message='My first post!' likeCount="25 "/>

        </div>
    </div>
};

export default MyPosts;