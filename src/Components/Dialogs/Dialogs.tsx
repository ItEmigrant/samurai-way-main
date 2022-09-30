import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: number
    name: string
}
type PropsMessageItemType = {
    message: string
}

const DialogItem: React.FC<DialogPropsType> = (props) => {

    let path = '/dialogs/' + props.id;
    return (<div className={s.nameDialog + ' ' + s.active}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>)
}

const MessageItem: React.FC<PropsMessageItemType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


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

