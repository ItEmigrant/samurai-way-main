import {ReduxStateType} from "../../Redux/reduxStore";
import {addFriendsActionCreator, sidebarType} from "../../Redux/SidebarReducer";
import {MyFriends} from "./myFriends";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    sidebar: sidebarType
}

type MapDispatchToPropsType = {
    addFriend: (addNewFriend: string) => void
}

export type CommonSidebarType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addFriend: (addNewFriend: string) => {
            dispatch(addFriendsActionCreator(addNewFriend))
        }
    }
}
export const MyFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(MyFriends);