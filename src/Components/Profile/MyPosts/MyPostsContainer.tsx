import React from 'react';

import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/ProfileReducer";
import {ReduxStoreType} from "../../../Redux/reduxStore";


type MyPostsContainerPropsType = {
    store:ReduxStoreType;
}


const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
    let state = props.store.getState();
    const addPost = () => {
        props.store.dispatch(addPostActionCreator(state.profilePage.messageForNewPosts))
    }

    const postChangeHandler = (text: string) => {
        props.store.dispatch(updateNewPostActionCreator(text))
    }

    return <div>
        <MyPosts updatePosts={postChangeHandler} addPosts={addPost} posts={state.profilePage.posts}
                 messageForNewPost={state.profilePage.messageForNewPosts}
       />

    </div>
};

export default MyPostsContainer;