import React from 'react';
import s from "./Users.module.css";
import UserPhoto from "../../assets/images/userSN.jpeg";
import {usersType} from "../../Redux/Users/UsersReducer";
import {NavLink} from "react-router-dom";
import Paginator from "../../Common/Paginator/Paginator";

export const Users = ({currentPage, pageSize, onPageChange, stateUsersPages, totalUsersCount, UnFollowThunkCreator, FollowThunkCreator, followingInProgress}: UsersPropsType) => {
    return <>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                   onPageChange={onPageChange}/>
        {
            stateUsersPages.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : UserPhoto} className={s.img}
                             alt={'samuraiUser'}/>
                            </NavLink>
                    </div>
                        <div>
                    {u.followed
                        ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                            UnFollowThunkCreator(u.id)

                        }}>UnFollow</button>
                        : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                            FollowThunkCreator(u.id)
                        }}>Follow</button>}
                        </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'location.country'}</div>
                        <div>{'location.city'}</div>
                    </span>
                </span>
            </div>)
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
