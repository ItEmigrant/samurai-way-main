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
    let dialogsData = [
        {id: 1, name: "Bogdan"},
        {id: 2, name: "Adrian"},
        {id: 3, name: "Adrian"},
        {id: 4, name: "Artem"},
        {id: 5, name: "Alisa"}
    ];

    let messageData = [
        {id:1, message: "Hi!"},
        {id:2, message: "Hello Bro!"},
        {id:3, message: "Have a nice day!"}

    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>

            </div>
            <div className={s.messages}>
                <MessageItem message={messageData[0].message}/>
                <MessageItem message={messageData[2].message}/>
                <MessageItem message={messageData[1].message}/>

            </div>
        </div>
    );
};

