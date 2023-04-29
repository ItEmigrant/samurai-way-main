import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/reduxStore";
import {myLoginThunkCreator} from "../../Redux/AuthReducer";


class HeaderContainer extends React.Component<MapStateToHeaderPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        this.props.myLoginThunkCreator()
    }


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
    myLoginThunkCreator: () => void


}

const mapStateToProps = (state: ReduxStateType): MapStateToHeaderPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email
    }
}


export default connect(mapStateToProps, {myLoginThunkCreator})(HeaderContainer);