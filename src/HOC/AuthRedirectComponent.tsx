import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {ReduxStateType} from "../Redux/reduxStore";
import {connect} from "react-redux";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function AuthRedirectComponent<T extends JSX.IntrinsicAttributes>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>

    }
    return connect(mapStateToProps)(RedirectComponent)
}