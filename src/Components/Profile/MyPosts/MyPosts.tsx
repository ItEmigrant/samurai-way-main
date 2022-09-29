import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi, how are you?", likeCount: 0},
        {id: 2, message: "My first post!", likeCount: 25}
    ]

    return <div className={s.MyPostsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
            <Post message={postData[1].message} likeCount={postData[1].likeCount}/>

        </div>
    </div>
};

export default MyPosts;