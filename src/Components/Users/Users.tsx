import React from 'react';
import {CommonUserType} from "./UserContainer";
import s from './Users.module.css'
import {usersType} from "../../Redux/UsersReducer";

export const Users = (props: CommonUserType) => {

    if (props.stateUsersPages.length === 0) {
        props.setUsers([
            {
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
            }
        ] as Array<usersType>)
    }


    const UnFollowHandler = (valueID:number) => {
        props.unFollow(valueID)
    }

    const FollowHandler = (valueID:number) => {
        props.follow(valueID)
    }

    return <div>
        {
            props.stateUsersPages.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.img} alt={'samuraiUser'}/>
                    </div>
                        <div>
                    {u.followed ? <button onClick={()=>{UnFollowHandler(u.id)}}>Follow</button> : <button onClick={()=>{FollowHandler(u.id)}}>UnFollow</button>}

                        </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

