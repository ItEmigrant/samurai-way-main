import React from 'react';
import {ReduxStateType} from "../../Redux/reduxStore";
import {addFriendsActionCreator, updateFriendsActionCreator} from "../../Redux/SidebarReducer";
import {MyFriends} from "./myFriends";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {sidebarType} from "../../Redux/store";


/*type  MyFriendsPropsType = {
    store: ReduxStoreType
}*/

/*export const MyFriendsContainer: React.FC<MyFriendsPropsType> = (props) => {

    let state = props.store.getState().sidebar;

    const addNewFriend = () => {
        props.store.dispatch(addFriendsActionCreator(state.newFriend))

    }

    const newName = (name:string) => {
        props.store.dispatch(updateFriendsActionCreator(name))

    }
    return (
        <div>
          <MyFriends state={state}
                     updateFriend={newName}
                     addFriend={addNewFriend}
          />
        </div>
    )
}*/

type MapStateToPropsType = {
    sidebar: sidebarType
}

type MapDispatchToPropsType = {
    updateFriend: (name: string) => void
    addFriend: () => void
}

export type CommonSidebarType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addFriend: () => {
            dispatch(addFriendsActionCreator())
        },

        updateFriend: (name: string) => {
            dispatch(updateFriendsActionCreator(name))

        }

    }
}
export const MyFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(MyFriends);