import React from 'react';
import './App.css';
import Navbar from "./Components/Nawbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {ActualNews} from "./Components/ActualNews/ActualNews";
import {Track} from "./Components/Track/Track";
import {YourSettings} from "./Components/YourSettings/YourSettings";
import {MyFriendsContainer} from "./Components/Friends/myFriendsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UserContainer from "./Components/Users/UserApiContainer";
import Login from "./Components/LOGIN/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {InitializedAppTC} from "./Redux/AppReducer";
import {ReduxStateType, store} from "./Redux/reduxStore";
import {Preloader} from "./Common/Preloader/Preloader";

const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));


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

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {InitializedAppTC}))(App);

const SamuraiJSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default SamuraiJSApp;


