import React from 'react';

import s from './Nawbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to='/profile' activeClassName={s.activeLink}> Profile </NavLink></div>
            <div className={s.item}><NavLink to='/dialogs' activeClassName={s.activeLink}> Message </NavLink></div>
            <div className={s.item}><NavLink to='/news' activeClassName={s.activeLink}> News </NavLink></div>
            <div className={s.item}><NavLink to='/music' activeClassName={s.activeLink}> Music</NavLink></div>
            <div className={s.item}><NavLink to='/settings' activeClassName={s.activeLink}> Settings</NavLink></div>
            <div className={s.item}><NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink></div>
            <div className={s.item}><NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink></div>
        </nav>
    );
};

export default Navbar;