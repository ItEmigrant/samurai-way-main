import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

export type FormDataMessageType = {
    newMessageBody: string;
}

export const AddMessageForm = (props: InjectedFormProps<FormDataMessageType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>

    );
};

export const ReduxMessageForm = reduxForm<FormDataMessageType>({form: 'Dialog Add message Form'})(AddMessageForm)