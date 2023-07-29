import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength30, required} from "../../../Utils/validators/validators";

export type FormDataPostType = {
    addNewPostBody: string;
}

export const AddPostsForm = (props: InjectedFormProps<FormDataPostType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'addNewPostBody'} component='textarea' validate={[required, maxLength30]}/>
            <div>
                <button>Add post</button>
            </div>
        </form>


    );
};

export const ReduxAddPostForm = reduxForm<FormDataPostType>({form: 'Profile Posts form'})(AddPostsForm)