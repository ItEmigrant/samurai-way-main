import React from 'react';
import {FormDataType, ReduxLoginForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginSingIn} from "../../Redux/AuthReducer";

const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginSingIn(formData.email, formData.password, formData.rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default connect(null, {loginSingIn})(Login);

