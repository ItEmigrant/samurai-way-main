import React from 'react';
import s from './Dialogs.module.css'
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.nameDialog}>
                    Bogdan
                </div>
                <div className={s.nameDialog + ' ' + s.active}>
                    Andrian
                </div>
                <div className={s.nameDialog}>
                    Luda
                </div>
                <div className={s.nameDialog}>
                    Artem
                </div>
                <div className={s.nameDialog}>
                    Alisa
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

