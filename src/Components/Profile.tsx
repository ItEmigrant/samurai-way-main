import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div><img
                src='https://th.bing.com/th/id/OIP.8xzxxZAXah8Uv7uhtR3e7QHaCs?w=312&h=127&c=7&r=0&o=5&dpr=1.5&pid=1.7'/>
            </div>
            <div>Ava description</div>
            <div>My post
                <div>New post</div>
            </div>

            <div className={s.item}>
                <div> post1</div>
                <div>post2</div>
            </div>

        </div>

    );
};

export default Profile;