import React from 'react';
import s from './Dialogs.module.css'
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {dialogPageType} from "../../Redux/state";


type DialogsPropsType = {
    state: dialogPageType
    newMessagePostText: string
    addNewMessagePost:(messageDialogs:string)=>void
    updateNewPostMessageText:(messageDialogs:string)=>void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)}
            </div>

            <div className={s.messages}>
                {props.state.messages.map(m => <MessageItem key={m.id}
                    addNewMessagePost={props.addNewMessagePost}
                    message={m.message}
                    newMessagePostText={props.newMessagePostText}
                    updateNewPostMessageText={props.updateNewPostMessageText}
                />)}


            </div>


        </div>
    );
};

