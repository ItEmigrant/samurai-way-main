import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {CreateField, Input} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../Utils/validators/validators";
import styles from '../../Common/FormsControls/FormControls.module.css';


const maxLength = maxLengthCreator(20);
export const LoginForm = ({handleSubmit, error}: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={handleSubmit}>
            {CreateField('Login', 'email', [required, maxLength], Input,{})}
            {/* <Field placeholder={'Login'} name={'email'} component={Input} validate={[required, maxLength]}/>*/}
            {CreateField('Password', 'password', [required, maxLength], Input, {type:"password"})}
           {/* <Field placeholder={'Password'} name={'password'} type={'password'} component={Input}
                       validate={[required, maxLength]}/>*/}
            {CreateField('','rememberMe',[], Input, {type:'checkbox'}, 'Remember me')}
              {/*  <Field name={'rememberMe'} component={'input'} type={"checkbox"}/> remember me*/}

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