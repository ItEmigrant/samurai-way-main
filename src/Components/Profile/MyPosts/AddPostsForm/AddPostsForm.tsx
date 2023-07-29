import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/validators/validators";
import Textarea from "../../../FormsControls/FormsControls";

export type FormDataPostType = {
    addNewPostBody: string;
}
const maxLength10 = maxLengthCreator(10);

export const AddPostsForm = (props: InjectedFormProps<FormDataPostType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'addNewPostBody'} component={Textarea} validate={[required, maxLength10]}/>
            <div>
                <button>Add post</button>
            </div>
        </form>

    );
};

export const ReduxAddPostForm = reduxForm<FormDataPostType>({form: 'Profile Posts form'})(AddPostsForm)