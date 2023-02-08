import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {dialogPageType} from "../../Redux/store";


type DialogsPropsType = {
    updateMessage: (body: string) => void
    sendMessage: () => void
    state: dialogPageType
    /*store: ReduxStoreType*/
    /*addNewMessagePost:(messageDialogs:string)=>void*/
    /*updateNewPostMessageText:(messageDialogs:string)=>void*/
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {


    let messagesElements = props.state.messages.map(m =>
        <MessageItem key={m.id}
                     message={m.message}

        />)

    let dialogElements = props.state.dialogs.map(el =>
        <DialogItem name={el.name} id={el.id}/>)
    /*addNewMessagePost={props.addNewMessagePost}*/
    /* updateNewPostMessageText={props.updateNewPostMessageText}*/

    const sendMessage = () => {
        props.sendMessage();
    }

    const messagePostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessage(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder={"Enter your message"} onChange={messagePostChange}
                                   value={props.state.newMessagePostText}></textarea></div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

