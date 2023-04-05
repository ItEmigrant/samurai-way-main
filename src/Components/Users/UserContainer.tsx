import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {
    followUserActionCreator, setCurrentPageAC, setTotalUsersCountAC,
    setUsersActionCreator,
    unFollowUserActionCreator,
    usersType
} from "../../Redux/UsersReducer";
import {Users} from "./Users";


type MapStateToProfilePropsType = {
    stateUsersPages: Array<usersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number

}

type MapDispatchToProfilePropsType = {
    follow: (idValue: number) => void
    unFollow: (idValue: number) => void
    setUsers: (newUsers: Array<usersType>) => void
    setPage: (newCurrentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type CommonUserType = MapStateToProfilePropsType & MapDispatchToProfilePropsType


const mapStateToProps = (state: ReduxStateType): MapStateToProfilePropsType => {
    return {
        stateUsersPages: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

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
        },
        setPage: (newCurrentPage: number) => {
            dispatch(setCurrentPageAC(newCurrentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }

}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)



