import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {message} from "antd";

const MyPosts = () => {

    let posts= [
        {id: 1, message: "Hi, how are you?", likeCount: 1},
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
            {posts.map(el=>(<Post message={el.message} likeCount={el.likeCount}/>))}
        </div>
    </div>
};

export default MyPosts;