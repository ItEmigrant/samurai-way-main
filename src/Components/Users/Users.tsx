import React from 'react';
import s from "./Users.module.css";
import UserPhoto from "../../assets/images/userSN.jpeg";
import {usersType} from "../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";
import {userApi} from "../../API/ApiTS";

type UsersPropsType = {
    stateUsersPages: Array<usersType>
    pageSize: number

    totalUsersCount: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    UnFollowHandler: (valueID: number) => void
    FollowHandler: (valueID: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <>
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? s.selectedPage : ''} onClick={() => {
                            props.onPageChange(p)
                        }}>{p}</span>
                    })
                }

            </div>
            {
                props.stateUsersPages.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : UserPhoto} className={s.img}
                             alt={'samuraiUser'}/>
                            </NavLink>
                    </div>
                        <div>
                    {u.followed
                        ? <button onClick={() => {
                            userApi.unFollowUsers(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.UnFollowHandler(u.id);
                                    }
                                })
                        }}>UnFollow</button>

                        : <button onClick={() => {
                            userApi.FollowUsers(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.FollowHandler(u.id);
                                    }
                                })

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
        </div>
    </>
}
