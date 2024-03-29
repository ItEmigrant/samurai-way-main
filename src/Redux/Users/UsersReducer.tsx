import {userApi} from "../../API/ApiTS";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../../Components/Utils/object-helpers";

export type usersType = {
    id: number
    photos: { small: string, large: string },
    name: string
    status: string
    followed: boolean
    location: { country: string, city: string }
}

export type  UserPageType = {
    users: Array<usersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

}


let initialUsersState: UserPageType = {
    /* {
             id: 1,
             photoUrl:'https://th.bing.com/th/id/OIP.HNAX5qOC3Vuv5_ygwm3hTgHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
             followed: true,
             fullName: "Bogus Sol",
             status: "I am a boss",
             location: {country: "Poland", city: "Krakow"}
         },
         {
             id: 2,
             photoUrl:'https://th.bing.com/th/id/OIP.HNAX5qOC3Vuv5_ygwm3hTgHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
             followed: false,
             fullName: "Alisa Kas",
             status: "I am a manager",
             location: {country: "Poland", city: "Warshaw"}
         },
         {
             id: 3,
             photoUrl:'https://th.bing.com/th/id/OIP.HNAX5qOC3Vuv5_ygwm3hTgHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
             followed: true,
             fullName: "Artur Mar",
             status: "I am a developer",
             location: {country: "Ukraine", city: "Kiev"}
         },
         {
             id: 4,
             photoUrl:'https://th.bing.com/th/id/OIP.HNAX5qOC3Vuv5_ygwm3hTgHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
             followed: false,
             fullName: "Tom Tai",
             status: "I am a driver",
             location: {country: "USA", city: "New York"}
         },*/
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

export type initialReducerUsersStateType = typeof initialUsersState
const UserReducer = (state: UserPageType = initialUsersState, action: UsersActionType): initialReducerUsersStateType => {

    switch (action.type) {
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.id] :
                    state.followingInProgress.filter(uID => uID !== action.id)
            };

        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching};

        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage};

        case "FOLLOW-USER":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
                /*state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)*/
            };

        case "UNFOLLOW-USER":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
            };

        case "SET-USERS":
            return {
                ...state, users: action.users
            };

        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }

        default:
            return state;


    }
}

export default UserReducer;

//types
type followUserActionType = ReturnType<typeof followUser>
type unFollowUserActionType = ReturnType<typeof unFollowUser>
export type UsersActionType =
    followUserActionType
    | unFollowUserActionType
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof ToggleIsFetching>
    | ReturnType<typeof ToggleFollowingProgress>


export const followUser = (userID: number) => ({
    type: "FOLLOW-USER", userID
}) as const

export const unFollowUser = (userID: number) => ({
    type: "UNFOLLOW-USER", userID
}) as const

export const setUsers = (users: Array<usersType>) => ({
    type: "SET-USERS", users
}) as const

export const setCurrentPage = (currentPage: number) => ({
    type: "SET-CURRENT-PAGE", currentPage
}) as const

export const setTotalUsersCount = (totalCount: number) => ({
    type: "SET-TOTAL-USERS-COUNT", totalCount
}) as const

export const ToggleIsFetching = (isFetching: boolean) => ({
    type: "TOGGLE-IS-FETCHING", isFetching
}) as const

export const ToggleFollowingProgress = (id: number, isFetching: boolean) => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS', id, isFetching
}) as const


export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(ToggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let data = await userApi.getUsers(currentPage, pageSize);
        dispatch(ToggleIsFetching(false))
        dispatch(setUsers(data.items as Array<usersType>))
        dispatch(setTotalUsersCount(data.totalCount as number))
    }
}

//local types ?????????????????????????????????????????????
type ActionCreatorFlowType = (id: number) => followUserActionType | unFollowUserActionType
type ApiMethodFlowType = (id: number) => Promise<{ resultCode: number }>
const followUnfollowFlow = async (id: number, dispatch: Dispatch, apiMethod: ApiMethodFlowType, actionCreator: ActionCreatorFlowType) => {
    dispatch(ToggleFollowingProgress(id, true));
    let data = await apiMethod(id);
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(ToggleFollowingProgress(id, false))
}

export const FollowThunkCreator = (id: number) => {
    return async (dispatch: Dispatch) => {
        await followUnfollowFlow(id, dispatch, userApi.FollowUsers.bind(id), followUser)
    }
}

export const UnFollowThunkCreator = (id: number) => {
    return async (dispatch: Dispatch) => {
        await followUnfollowFlow(id, dispatch, userApi.unFollowUsers.bind(id), unFollowUser)
    }
}