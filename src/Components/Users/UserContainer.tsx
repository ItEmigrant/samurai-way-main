import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {
    followUserActionCreator, setCurrentPageAC, setTotalUsersCountAC,
    setUsersActionCreator,
    unFollowUserActionCreator,
    usersType
} from "../../Redux/UsersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

export class UsersApiContainer extends React.Component<CommonUserType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(
                response.data.items as Array<usersType>);
            this.props.setTotalUsersCount(
                response.data.totalCount as number);
        })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(
                response.data.items as Array<usersType>);
        })
    }

    UnFollowHandler = (valueID: number) => {
        this.props.unFollow(valueID)
    }

    FollowHandler = (valueID: number) => {
        this.props.follow(valueID)
    }


    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            stateUsersPages={this.props.stateUsersPages}
            onPageChange={this.onPageChange}
            UnFollowHandler={this.UnFollowHandler}
            FollowHandler={this.FollowHandler}
        />
    }

}


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

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)



