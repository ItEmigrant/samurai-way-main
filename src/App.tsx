import React from 'react';
import './App.css';
import Navbar from "./Components/Nawbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {ActualNews} from "./Components/ActualNews/ActualNews";
import {Track} from "./Components/Track/Track";
import {YourSettings} from "./Components/YourSettings/YourSettings";
import {MyFriendsContainer} from "./Components/Friends/myFriendsContainer";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UserContainer from "./Components/Users/UserApiContainer";
import Login from "./Components/LOGIN/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {InitializedAppTC} from "./Redux/AppReducer";
import {ReduxStateType} from "./Redux/reduxStore";
import {Preloader} from "./Components/Preloader/Preloader";

type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    InitializedAppTC: () => void;
}

export type CommonAppType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        initialized: state.App.initialized
    }
}

class App extends React.Component<CommonAppType> {
    componentDidMount() {
        this.props.InitializedAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/friends' render={() =>
                        <MyFriendsContainer/>}/>
                    <Route path='/users' render={() =>
                        <UserContainer/>}/>
                    <Route path='/news' component={ActualNews}/>
                    <Route path='/music' component={Track}/>
                    <Route path='/settings' component={YourSettings}/>
                </div>
            </div>

        )
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {InitializedAppTC}))(App);
