import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {postsType} from "../../../Redux/state";


type MyPostsPropsType = {
    posts: Array<postsType>
    addStatePostMessage: (postMessage: string) => void

}
const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.addStatePostMessage(newPostElement.current.value)
        }
    }

    return <div className={s.MyPostsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {props.posts.map(el => (<Post message={el.message} likeCount={el.likeCount}/>))}
        </div>
    </div>
};

export default MyPosts;