import React from 'react';


type PropsMessageItemType = {
    message: string
}

export const MessageItem: React.FC<PropsMessageItemType> = (props) => {

    let newMessage = React.useRef<HTMLTextAreaElement>(null)

    const addMessage = () => {
        const textMessage = newMessage.current?.value;
        alert(textMessage)
    }

    return (
        <div>
            {props.message} <textarea ref={newMessage}>
        </textarea>
            <button onClick={addMessage}>+</button>

        </div>
    )
}