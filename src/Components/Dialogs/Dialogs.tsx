import React from 'react';
import s from './Dialogs.module.css'
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {dialogsType, messagesType} from "../../index";

type DialogsPropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>

}

export const Dialogs: React.FC <DialogsPropsType> = (props) => {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)}
            </div>

            <div className={s.messages}>
                {props.messages.map(m => <MessageItem message={m.message}/>)}
            </div>

        </div>
    );
};

