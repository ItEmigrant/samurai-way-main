import React from 'react';
import s from './Dialogs.module.css'
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {CommonType} from "./DialogsContainer";
import {ReduxMessageForm} from "./DialogForm/AddMessageForm";



type DialogsPropsType = CommonType & JSX.IntrinsicAttributes;
type ValuesType = {
    newMessageBody: string;
}

export const Dialogs = (props: DialogsPropsType) => {


    let messagesElements = props.stateDialogPage.messages.map(m =>
        <MessageItem key={m.id}
                     message={m.message}
        />)

    let dialogElements = props.stateDialogPage.dialogs.map(el =>
        <DialogItem name={el.name} id={el.id}/>)

    const addNewMessage = (values: ValuesType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <ReduxMessageForm onSubmit={addNewMessage}/>
        </div>
    );
};

