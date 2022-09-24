import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogPropsType = {
    id:number
    name:string
}
type PropsMessageItemType = {
    message:string
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Bogdan'} id={1}/>
                <DialogItem name={'Adrian'} id={2}/>
                <DialogItem name={'Luda'} id={3}/>
                <DialogItem name={'Artem'} id={4}/>
                <DialogItem name={'Alisa'} id={5}/>
            </div>
            <div className={s.messages}>
                <MessageItem message={'Hi!'}/>
                <MessageItem message={'Hello Bro!'}/>
                <MessageItem message={'Have a nice day'}/>

            </div>
        </div>
    );
};

