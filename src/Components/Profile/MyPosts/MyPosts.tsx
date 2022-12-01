import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {ActionsTypes, postsType} from "../../../Redux/state";


type MyPostsPropsType = {
    posts: Array<postsType>
    /*addStatePostMessage: (postMessage: string) => void*/
    messageForNewPosts: string
   /* updateNewPostText: (postMessage: string) => void*/
    dispatch: (action: ActionsTypes) => void

}
const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const addPost = () => {
       /* props.addStatePostMessage(props.messageForNewPosts);*/
        props.dispatch({type:"ADD-STATE-POST-MESSAGE", messageForNewPosts:props.messageForNewPosts})
    }


    const postChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       /* props.updateNewPostText(e.currentTarget.value)*/
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", postMessage:e.currentTarget.value})
    }

    return <div className={s.MyPostsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea onChange={postChangeHandler} value={props.messageForNewPosts}/>
            </div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {props.posts.map(el => (<Post key={el.id} message={el.message} likeCount={el.likeCount}/>))}
        </div>
    </div>
};

export default MyPosts;