import React, {ChangeEvent} from 'react';


type PropsMessageItemType = {
    message: string
    newMessagePostText: string
    addNewMessagePost: (messageDialogs: string) => void
    updateNewPostMessageText: (messageDialogs: string) => void
}

export const MessageItem: React.FC<PropsMessageItemType> = (props) => {


    const addMessage = () => {
        props.addNewMessagePost(props.newMessagePostText)
    }

    const messagePostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostMessageText(e.currentTarget.value)
    }

    return (
        <div>
            {props.message} <textarea onChange={messagePostChange} value={props.newMessagePostText}/>

            <button onClick={addMessage}>+</button>

        </div>
    )
}