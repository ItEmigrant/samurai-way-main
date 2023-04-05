import React from 'react';
import UserPhoto from "../../assets/images/userSN.jpeg";
import s from "./Users.module.css";
import axios from "axios";
import {usersType} from "../../Redux/UsersReducer";
import {CommonUserType} from "./UserContainer";

export class Users extends React.Component<CommonUserType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(
                response.data.items as Array<usersType>);
            this.props.setTotalUsersCount(
                response.data.totalCount as number);
        })
    }

    onPageChange = (pageNumber:number) => {
        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(
                response.data.items as Array<usersType>);
        })
    }

    UnFollowHandler = (valueID: number) => {
        this.props.unFollow(valueID)
    }

    FollowHandler = (valueID: number) => {
        this.props.follow(valueID)
    }



    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={this.props.currentPage === p ? s.selectedPage : ''} onClick={()=>{this.onPageChange(p)}}>{p}</span>
                    })
                }

            </div>
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
