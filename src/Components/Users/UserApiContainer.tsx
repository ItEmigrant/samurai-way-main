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
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        /* this.props.ToggleIsFetching(true);

         userApi.getUsers(this.props.currentPage, this.props.pageSize)
             .then(data => {
                 this.props.ToggleIsFetching(false)
                 this.props.setUsers(data.items as Array<usersType>);
                 this.props.setTotalUsersCount(data.totalCount as number);
             });*/
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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

export type CommonUserType = MapStateToProfilePropsType & MapDispatchToProfilePropsType

/*const mapStateToProps = (state: ReduxStateType): MapStateToProfilePropsType => {
    return {
        stateUsersPages: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}*/
const mapStateToProps = (state: ReduxStateType): MapStateToProfilePropsType => {
    return {
       /* stateUsersPages: getUsersPages(state),*/
        stateUsersPages: getUserSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

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

export default connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    UnFollowThunkCreator,
    FollowThunkCreator
})
(UsersApiContainer);



