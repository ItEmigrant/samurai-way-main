import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataAddFriendType = {
    addNewFriend: string;
}

export const AddFriendsForm = (props: InjectedFormProps<FormDataAddFriendType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'addNewFriend'} component='textarea'/>
            <div>
                <button>Add friend</button>
            </div>
        </form>


    );
};

export const ReduxAddFriendForm = reduxForm<FormDataAddFriendType>({form: 'Add friends form'})( AddFriendsForm)