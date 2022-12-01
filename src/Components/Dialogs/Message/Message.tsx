import React, {ChangeEvent} from 'react';
import {ActionsTypes} from "../../../Redux/state";



type PropsMessageItemType = {
    dispatch: (action: ActionsTypes) =>void
    message: string
    newMessagePostText: string
   /* addNewMessagePost: (messageDialogs: string) => void
    updateNewPostMessageText: (messageDialogs: string) => void*/
}

export const MessageItem: React.FC<PropsMessageItemType> = (props) => {


    const addMessage = () => {
       /* props.addNewMessagePost(props.newMessagePostText)*/
        props.dispatch({type: "ADD-NEW-MESSAGE-POST", newMessage:props.newMessagePostText})
    }

    const messagePostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       /* props.updateNewPostMessageText(e.currentTarget.value)*/
        props.dispatch({type:"UPDATE-NEW-POST-MESSAGE-TEXT", messageDialogs: (e.currentTarget.value)})
    }

    return (
        <div>
            {props.message} <textarea onChange={messagePostChange} value={props.newMessagePostText}/>

            <button onClick={addMessage}>+</button>

        </div>
    )
}