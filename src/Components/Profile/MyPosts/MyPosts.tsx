import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {postsType} from "../../../Redux/state";


type MyPostsPropsType = {
    posts: Array<postsType>
}
const MyPosts:React.FC<MyPostsPropsType> = (props) => {

    return <div className={s.MyPostsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            {props.posts.map(el => (<Post message={el.message} likeCount={el.likeCount}/>))}
        </div>
    </div>
};

export default MyPosts;