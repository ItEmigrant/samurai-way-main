import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {CommonType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


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

type DialogsPropsType = CommonType & JSX.IntrinsicAttributes;

export const Dialogs = (props: DialogsPropsType) => {


    let messagesElements = props.stateDialogPage.messages.map(m =>
        <MessageItem key={m.id}
                     message={m.message}
        />)

    let dialogElements = props.stateDialogPage.dialogs.map(el =>
        <DialogItem name={el.name} id={el.id}/>)
    /*addNewMessagePost={props.addNewMessagePost}*/
    /* updateNewPostMessageText={props.updateNewPostMessageText}*/

    const sendMessages = () => {
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

            </div>
            <ReduxMessageForm/>
        </div>
    );
};

/*type AddMessageFormPropsType = {
    sendMessages: () => void;
    messagePostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    stateDialogPage: {
        newMessagePostText: string;
    };
    handleSubmit?:FormEventHandler<HTMLFormElement>
}



export const AddMessageForm = (props: AddMessageFormPropsType & InjectedFormProps<any>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='new message body' placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>)

}
export const ReduxMessageForm =reduxForm({form: 'textarea'})(AddMessageForm)*/

export type FormDataMessageType = {
    newMessage:string
}
export const AddMessageForm = (props: InjectedFormProps<FormDataMessageType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='new message body' placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>

    );
};

export const ReduxMessageForm = reduxForm<FormDataMessageType>({form: 'Dialog Add message Form'})(AddMessageForm)