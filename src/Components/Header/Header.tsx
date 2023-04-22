import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}><img
            src="https://th.bing.com/th/id/OIP.sxdELx88HQjlvgfXWUENawHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt={'header'}/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};
export default Header;