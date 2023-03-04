import React from 'react';
import UserPhoto from "../../assets/images/userSN.jpeg";
import s from "./Users.module.css";
import axios from "axios";
import {usersType} from "../../Redux/UsersReducer";
import {CommonUserType} from "./UserContainer";

export class Users extends React.Component<CommonUserType, any> {

    constructor(props:CommonUserType) {
        super(props);



            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

                this.props.setUsers(
                    response.data.items as Array<usersType>)
            })
        }


    UnFollowHandler = (valueID: number) => {
        this.props.unFollow(valueID)
    }


    FollowHandler = (valueID: number) => {
        this.props.follow(valueID)
    }

    render() {
        return <div>
            {
                this.props.stateUsersPages.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : UserPhoto} className={s.img}
                             alt={'samuraiUser'}/>
                    </div>
                        <div>
                    {u.followed ? <button onClick={() => {
                        this.UnFollowHandler(u.id)
                    }}>Follow</button> : <button onClick={() => {
                        this.FollowHandler(u.id)
                    }}>UnFollow</button>}

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
    }

}
