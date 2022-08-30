import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";

const MyPosts = () => {
    return <div className={s.posts}>
            My post
            <div >
                New post
            </div>
            <div >
               <Post />
               <Post />
               <Post />

            </div>
        </div>
};

export default MyPosts;