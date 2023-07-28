import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataPostType = {
    addNewPostBody: string;
}

export const AddPostsForm = (props: InjectedFormProps<FormDataPostType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'addNewPostBody'} component='textarea'/>
            <div>
                <button>Add post</button>
            </div>
        </form>


    );
};

export const ReduxAddPostForm = reduxForm<FormDataPostType>({form: 'Profile Posts form'})(AddPostsForm)