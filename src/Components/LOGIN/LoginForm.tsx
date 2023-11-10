import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {CreateField, Input} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../Utils/validators/validators";
import styles from '../../Common/FormsControls/FormControls.module.css';


const maxLength = maxLengthCreator(20);
export const LoginForm = (props: LoginFormProps) => {
    const {handleSubmit, error, captchaURL} = props
    return (
        <form onSubmit={handleSubmit}>
            {CreateField('Login', 'email', [required, maxLength], Input, {})}
            {/* <Field placeholder={'Login'} name={'email'} component={Input} validate={[required, maxLength]}/>*/}
            {CreateField('Password', 'password', [required, maxLength], Input, {type: "password"})}
            {/* <Field placeholder={'Password'} name={'password'} type={'password'} component={Input}
                       validate={[required, maxLength]}/>*/}
            {CreateField('', 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember me')}
            {captchaURL && <img src={captchaURL} alt="captchaURL"/>}
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
    captchaURL: string | null

}

type LoginFormProps =
    InjectedFormProps<FormDataType, {
        captchaURL: string | null
    }>
    & {
    captchaURL: string | null
}
export const ReduxLoginForm = reduxForm<FormDataType, {
    captchaURL: string | null
}>({form: 'login'})(LoginForm)