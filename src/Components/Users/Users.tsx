import React from 'react';
import {usersType} from "../../Redux/Users/UsersReducer";
import Paginator from "../../Common/Paginator/Paginator";
import OneUser from "./oneUser";

export const Users = ({currentPage, pageSize, onPageChange, stateUsersPages, totalUsersCount, UnFollowThunkCreator, FollowThunkCreator, followingInProgress}: UsersPropsType) => {
    return <>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                   onPageChange={onPageChange}/>
        {
            stateUsersPages.map(u => <div key={u.id}>
                    <OneUser
                        followingInProgress={followingInProgress}
                        FollowThunkCreator={FollowThunkCreator}
                        UnFollowThunkCreator={UnFollowThunkCreator}
                        User={u}/>
                </div>
            )
        }
    </>
}

//types
type UsersPropsType = {
    stateUsersPages: Array<usersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: number[]
    onPageChange: (pageNumber: number) => void
    FollowThunkCreator: (id: number) => void
    UnFollowThunkCreator: (id: number) => void
}
