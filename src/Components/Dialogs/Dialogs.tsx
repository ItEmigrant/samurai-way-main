import React from 'react';
import s from './Dialogs.module.css'
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";


export const Dialogs = () => {
    let dialogs = [
        {id: 1, name: "Bogdan"},
        {id: 2, name: "Adrian"},
        {id: 3, name: "Artur"},
        {id: 4, name: "Artem"},
        {id: 5, name: "Alisa"},
    ];

    let messages = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello Bro!"},
        {id: 3, message: "Have a nice day!"},
        {id: 4, message: "Yo!"},
        {id: 5, message: ":-)!"},

    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)}
            </div>

            <div className={s.messages}>
                {messages.map(m => <MessageItem message={m.message}/>)}
            </div>

        </div>
    );
};

