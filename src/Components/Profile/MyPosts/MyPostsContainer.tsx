import MyPosts from "./MyPosts";
import {addPostActionCreator, postsType} from "../../../Redux/ProfileReducer";
import {ReduxStateType} from "../../../Redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateToProfilePropsType = {
    posts: Array<postsType>
    messageForNewPost: string
}

type MapDispatchToProfilePropsType = {
    addPosts: (addNewPostBody: string) => void
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
        addPosts: (NewPostBody: string) => {
            dispatch(addPostActionCreator(NewPostBody))

        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);