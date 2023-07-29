import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import Textarea from "../../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../Utils/validators/validators";

export type FormDataMessageType = {
    newMessageBody: string;
}
const maxLength30 = maxLengthCreator(30);
export const AddMessageForm = (props: InjectedFormProps<FormDataMessageType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newMessageBody'
                       placeholder={"Enter your message"}
                       validate={[required, maxLength30]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>

    );
};

export const ReduxMessageForm = reduxForm<FormDataMessageType>({form: 'Dialog Add message Form'})(AddMessageForm)