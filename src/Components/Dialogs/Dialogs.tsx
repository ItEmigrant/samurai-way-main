import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.nameDialog}>
                   <NavLink to='/dialogs/1'> Bogdan </NavLink>
                </div>
                <div className={s.nameDialog + ' ' + s.active}>
                   <NavLink to='/dialogs/2'> Andrian </NavLink>
                </div>
                <div className={s.nameDialog}>
                    <NavLink to='/dialogs/3'> Luda </NavLink>
                </div>
                <div className={s.nameDialog}>
                    <NavLink to='/dialogs/4'> Artem </NavLink>
                </div>
                <div className={s.nameDialog}>
                    <NavLink to='/dialogs/5'> Alisa </NavLink>
                </div>
            </div>
            <div className= {s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>Hello Bro!</div>
                <div className={s.message}> Have a nice day </div>
            </div>
        </div>
    );
};

