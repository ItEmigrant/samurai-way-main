import React from 'react';


type PropsMessageItemType = {
    message: string
}

export const MessageItem: React.FC<PropsMessageItemType> = (props) => {

    let newMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {

        alert(newMessage.current?.value)
    }

    return (
        <div>
            {props.message} <textarea ref={newMessage}>
        </textarea>
            <button onClick={addMessage}>+</button>

        </div>
    )
}