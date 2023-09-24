import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {CreateField, Input} from "../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../Utils/validators/validators";
import styles from '../FormsControls/FormControls.module.css';


const maxLength = maxLengthCreator(20);
export const LoginForm = ({handleSubmit, error}: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={handleSubmit}>
            {CreateField('Login', 'email', [required, maxLength], Input)}
            {/* <Field placeholder={'Login'} name={'email'} component={Input} validate={[required, maxLength]}/>*/}
            {CreateField('Password', 'password', [required, maxLength], Input)}
           {/* <Field placeholder={'Password'} name={'password'} type={'password'} component={Input}
                       validate={[required, maxLength]}/>*/}

            <div>
                <Field name={'rememberMe'} component={'input'} type={"checkbox"}/> remember me
            </div>
            {error && <div className={styles.formSummeryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

//types
export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)