import React from 'react';

type PropsMessageItemType = {
    message: string
}

export const MessageItem: React.FC<PropsMessageItemType> = (props) => {

    return (
        <div>
            {props.message}


        </div>
    )
}