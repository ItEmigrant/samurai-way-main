import React from 'react';
import {NavLink} from "react-router-dom";
import UserPhoto from "../../assets/images/userSN.jpeg";
import s from "./Users.module.css";
import {usersType} from "../../Redux/Users/UsersReducer";


const OneUser = ({User, UnFollowThunkCreator, FollowThunkCreator, followingInProgress}: UsersPropsType) => {
    return (
        <div>
            <span>
                    <div>
                        <NavLink to={'/profile/' + User.id}>
                        <img src={User.photos.small !== null ? User.photos.small : UserPhoto} className={s.img}
                             alt={'samuraiUser'}/>
                            </NavLink>
                    </div>
                        <div>
                    {User.followed
                        ? <button disabled={followingInProgress.some(id => id === User.id)} onClick={() => {
                            UnFollowThunkCreator(User.id)

                        }}>UnFollow</button>
                        : <button disabled={followingInProgress.some(id => id === User.id)} onClick={() => {
                            FollowThunkCreator(User.id)
                        }}>Follow</button>}
                        </div>
                </span>
            <span>
                    <span>
                        <div>{User.name}</div>
                        <div>{User.status}</div>
                    </span>
                    <span>
                        <div>{'location.country'}</div>
                        <div>{'location.city'}</div>
                    </span>
                </span>
        </div>
    )
}


export default OneUser;

//types
type UsersPropsType = {
    followingInProgress: number[]
    FollowThunkCreator: (id: number) => void
    UnFollowThunkCreator: (id: number) => void
    User: usersType
}