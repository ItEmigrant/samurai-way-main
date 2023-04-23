import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/reduxStore";
import {AuthStatePropsType, setAuthUserData} from "../../Redux/AuthReducer";
import {userApi} from "../../API/ApiTS";


class HeaderContainer extends React.Component<MapStateToHeaderPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        userApi.myLogin()
            .then(data=> {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData({userId: id, login, email})
                }
            })
    }

/*{
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    withCredentials: true
})
.then(response => {

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        this.props.setAuthUserData({userId: id, login, email})
    }
})
}*/


    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} email={this.props.email}/>
    }

}

type MapStateToHeaderPropsType = {
    login: string | null
    isAuth: boolean
    email: string | null

}
type MapDispatchToPropsType = {
    setAuthUserData: (data: Omit<AuthStatePropsType, 'isAuth'>) => void


}

const mapStateToProps = (state: ReduxStateType): MapStateToHeaderPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email
    }
}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);