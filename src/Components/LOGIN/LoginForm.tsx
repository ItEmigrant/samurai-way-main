import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../Utils/validators/validators";


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength12 = maxLengthCreator(20);
export const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'email'} component={Input}  validate={[required, maxLength12]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'}  type={'password'} component={Input}  validate={[required, maxLength12]}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={"checkbox"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    );
};


export const ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)