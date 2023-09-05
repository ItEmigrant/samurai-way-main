import {ReduxStateType} from "../reduxStore";
import {usersType} from "./UsersReducer";
import {createSelector} from "reselect";


export const getUsersPage = (state: ReduxStateType): Array<usersType> => {
    return state.usersPage.users
};
export const getUserSuperSelector = createSelector(getUsersPage, (users) => {
    return users.filter(u => u)
})

export const getPageSize = (state: ReduxStateType): number => {
    return state.usersPage.pageSize
};

export const getTotalUsersCount = (state: ReduxStateType): number => {
    return state.usersPage.totalUsersCount
};

export const getCurrentPage = (state: ReduxStateType): number => {
    return state.usersPage.currentPage
};

export const getIsFetching = (state: ReduxStateType): boolean => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: ReduxStateType): Array<number> => {
    return state.usersPage.followingInProgress
}