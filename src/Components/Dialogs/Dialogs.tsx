import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {CommonType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


/*
type DialogsPropsType = {
    updateMessage: (body: string) => void
    sendMessage: () => void
    state: dialogPageType
    /!*store: ReduxStoreType*!/
    /!*addNewMessagePost:(messageDialogs:string)=>void*!/
    /!*updateNewPostMessageText:(messageDialogs:string)=>void*!/
}
*/
/*
type DialogsPropsType = {
    stateDialogPage: dialogPageType
    updateMessage: (body:string)=>void
    sendMessage: (newMessage: string)=> void
}
*/


export const Dialogs = (props: CommonType) => {


    let messagesElements = props.stateDialogPage.messages.map(m =>
        <MessageItem key={m.id}
                     message={m.message}
        />)

    let dialogElements = props.stateDialogPage.dialogs.map(el =>
        <DialogItem name={el.name} id={el.id}/>)
    /*addNewMessagePost={props.addNewMessagePost}*/
    /* updateNewPostMessageText={props.updateNewPostMessageText}*/

    const sendMessage = () => {
        props.sendMessage();
    }

    const messagePostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessage(e.currentTarget.value)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder={"Enter your message"} onChange={messagePostChange}
                                   value={props.stateDialogPage.newMessagePostText}></textarea></div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

