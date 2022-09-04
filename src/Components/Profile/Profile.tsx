import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div><img className={s.image} src='https://th.bing.com/th/id/OIP.8xzxxZAXah8Uv7uhtR3e7QHaCs?w=312&h=127&c=7&r=0&o=5&dpr=1.5&pid=1.7' alt={'Profile'}/>
            </div>
            <div className={s.item}>Ava + description</div>
            <MyPosts />

        </div>
    );
}

export default Profile;