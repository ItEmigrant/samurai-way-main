import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/reduxStore";

import {
    followUser, setCurrentPage, setTotalUsersCount,
    setUsers, ToggleIsFetching,
    unFollowUser,
    usersType
} from "../../Redux/UsersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {userApi} from "../../API/ApiTS";



export class UsersApiContainer extends React.Component<CommonUserType, any> {

    componentDidMount() {
        this.props.ToggleIsFetching(true);

        userApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.ToggleIsFetching(false)
                this.props.setUsers(
                    data.items as Array<usersType>);
                this.props.setTotalUsersCount(
                    data.totalCount as number);
            });
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.ToggleIsFetching(true);

        userApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.ToggleIsFetching(false)
            this.props.setUsers(
                data.items as Array<usersType>);
        })
    }

    UnFollowHandler = (valueID: number) => {
        this.props.unFollowUser(valueID)
    }

    FollowHandler = (valueID: number) => {
        this.props.followUser(valueID)
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                stateUsersPages={this.props.stateUsersPages}
                onPageChange={this.onPageChange}
                UnFollowHandler={this.UnFollowHandler}
                FollowHandler={this.FollowHandler}

            />
        </>
    }
}

type MapStateToProfilePropsType = {
    stateUsersPages: Array<usersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean


}
type MapDispatchToProfilePropsType = {
    followUser: (idValue: number) => void
    unFollowUser: (idValue: number) => void
    setUsers: (newUsers: Array<usersType>) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    ToggleIsFetching: (isFetching: boolean) => void
}

export type CommonUserType = MapStateToProfilePropsType & MapDispatchToProfilePropsType

const mapStateToProps = (state: ReduxStateType): MapStateToProfilePropsType => {
    return {
        stateUsersPages: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProfilePropsType => {
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
        },
        ToggleIsFetching: (isFetching: boolean) => {
            dispatch(ToggleIsFetchingAC(isFetching))
        }
    }

}*/

export const UserContainer = connect(mapStateToProps, {
    followUser, unFollowUser, setUsers, setCurrentPage, setTotalUsersCount, ToggleIsFetching
})
(UsersApiContainer);



