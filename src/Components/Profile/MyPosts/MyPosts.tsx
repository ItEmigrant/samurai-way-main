import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {ProfileCommonType} from "./MyPostsContainer";



/*type MyPostsPropsType = {
    posts: Array<postsType>
    updatePosts: (text: string) => void
    addPosts: () => void
    messageForNewPost:string
}*/

const MyPosts = (props:ProfileCommonType) => {

    const addPost = () => {
        props.addPosts();
    }


    const postChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePosts(e.currentTarget.value)
    }

    return <div className={s.MyPostsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea onChange={postChangeHandler} value={props.messageForNewPost}/>
            </div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {props.posts.map(el => (<Post key={el.id} message={el.message} likeCount={el.likeCount}/>))}
        </div>
    </div>
};

export default MyPosts;