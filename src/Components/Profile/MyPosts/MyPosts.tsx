import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {ProfileCommonType} from "./MyPostsContainer";
import {ReduxAddPostForm} from "./AddPostsForm/AddPostsForm";

type ValuesPostType = {
    addNewPostBody: string;
}
const MyPosts = (props: ProfileCommonType) => {

    const addNewPost = (values: ValuesPostType) => {
        props.addPosts(values.addNewPostBody);
    }

    return <div className={s.MyPostsBlock}>
        <h3>My post</h3>
        <div>
            <ReduxAddPostForm onSubmit={addNewPost}/>
        </div>
        <div className={s.posts}>
            {props.posts.map(el => (<Post key={el.id} message={el.message} likeCount={el.likeCount}/>))}
        </div>
    </div>
};

export default MyPosts;