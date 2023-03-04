import {connect} from "react-redux";
/*import {Users} from "./Users";*/
import {ReduxStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import  {
    followUserActionCreator,
    setUsersActionCreator,
    unFollowUserActionCreator,
    usersType
} from "../../Redux/UsersReducer";
import {Users} from "./Users";



type MapStateToProfilePropsType = {
    stateUsersPages: Array<usersType>
}

type MapDispatchToProfilePropsType = {
    follow: (idValue: number) => void
    unFollow: (idValue: number) => void
    setUsers: (newUsers: Array<usersType>) => void
}

export type CommonUserType = MapStateToProfilePropsType & MapDispatchToProfilePropsType


const mapStateToProps = (state: ReduxStateType): MapStateToProfilePropsType => {
    return {
        stateUsersPages: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProfilePropsType => {
    return {
        follow: (idValue: number) => {
            dispatch(followUserActionCreator(idValue))
        },
        unFollow: (idValue: number) => {
            dispatch(unFollowUserActionCreator(idValue))
        },
        setUsers: (newUsers: Array<usersType>) => {
            dispatch(setUsersActionCreator(newUsers))
        }

    }

}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)



