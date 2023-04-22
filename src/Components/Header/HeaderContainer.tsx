import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/reduxStore";
import {setAuthUserData} from "../../Redux/AuthReducer";


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }

}

type MapStateToHeaderPropsType = {
    login: string | null
    isAuth: boolean

}

const mapStateToProps = (state: ReduxStateType): MapStateToHeaderPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);