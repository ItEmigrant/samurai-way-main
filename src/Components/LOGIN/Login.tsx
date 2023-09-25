import React from 'react';
import {FormDataType, ReduxLoginForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginSingIn} from "../../Redux/AuthReducer";
import {ReduxStateType} from "../../Redux/reduxStore";
import {Redirect} from "react-router-dom";

const Login = ({loginSingIn, isAuth}: LoginProps) => {
    const onSubmit = (formData: FormDataType) => {
        loginSingIn(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}


const mapStateToProps = (state: ReduxStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginSingIn})(Login);


//types
type LoginProps = {
    isAuth: boolean;
    loginSingIn: (email: string, password: string, rememberMe: boolean) => void;
}