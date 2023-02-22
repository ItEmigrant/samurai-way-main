import React from 'react';

import MyPosts from "./MyPosts";
import {addPostActionCreator, postsType, updateNewPostActionCreator} from "../../../Redux/ProfileReducer";
import {ReduxStateType} from "../../../Redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";


/*type MyPostsContainerPropsType = {
    store: ReduxStoreType;
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
};*/

type MapStateToProfilePropsType = {
    posts: Array<postsType>
    messageForNewPost: string
}

type MapDispatchToProfilePropsType = {
    updatePosts: (text: string) => void
    addPosts: () => void

}


export type ProfileCommonType = MapStateToProfilePropsType & MapDispatchToProfilePropsType

const mapStateToProps = (state: ReduxStateType): MapStateToProfilePropsType => {

    return {
        messageForNewPost: state.profilePage.messageForNewPosts,
        posts: state.profilePage.posts

    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProfilePropsType => {
    return {

        addPosts: () => {
            dispatch(addPostActionCreator())
        },

        updatePosts: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);