import React from 'react';
import s from "../Dialogs.module.css";

type PropsMessageItemType = {
  message: string
}

export const MessageItem: React.FC<PropsMessageItemType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
