import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/reduxStore";

import {
    FollowThunkCreator,
    getUsers,
    setCurrentPage,
    UnFollowThunkCreator,
    usersType
} from "../../Redux/Users/UsersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../Common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUserSuperSelector
} from "../../Redux/Users/user-selectors";


class UsersApiContainer extends React.Component<CommonUserType> {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize)

    }

    onPageChange = (pageNumber: number) => {
        let {pageSize}=this.props;
        this.props.getUsers(pageNumber, pageSize);
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
                followingInProgress={this.props.followingInProgress}
                FollowThunkCreator={this.props.FollowThunkCreator}
                UnFollowThunkCreator={this.props.UnFollowThunkCreator}

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
    followingInProgress: Array<number>


}
export type MapDispatchToProfilePropsType = {
    setCurrentPage: (newCurrentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    FollowThunkCreator: (id: number) => void
    UnFollowThunkCreator: (id: number) => void
}

export type CommonUserType = MapStateToProfilePropsType & MapDispatchToProfilePropsType;

const mapStateToProps = (state: ReduxStateType): MapStateToProfilePropsType => {
    return {
        stateUsersPages: getUserSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}

export default connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    UnFollowThunkCreator,
    FollowThunkCreator
})
(UsersApiContainer);



