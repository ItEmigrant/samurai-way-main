import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {
    sendMessageActionCreator,
    storeType,
    updateMessageActionCreator
} from "../../Redux/state";


type DialogsPropsType = {
    store: storeType
    /*addNewMessagePost:(messageDialogs:string)=>void*/
    /*updateNewPostMessageText:(messageDialogs:string)=>void*/
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.store.getState().dialogsPage

    let messagesElements = state.messages.map(m =>
        <MessageItem key={m.id}
                     message={m.message}
                     newMessagePostText={state.newMessagePostText}
                     dispatch={props.store.dispatch}
        />)

    let dialogElements = state.dialogs.map(el =>
        <DialogItem name={el.name} id={el.id}/>)
    /*addNewMessagePost={props.addNewMessagePost}*/
    /* updateNewPostMessageText={props.updateNewPostMessageText}*/

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator(state.newMessagePostText))
    }

    const messagePostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.store.dispatch(updateMessageActionCreator(e.currentTarget.value))
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
                                   value={state.newMessagePostText}></textarea></div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

