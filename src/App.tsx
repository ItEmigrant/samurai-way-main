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
import {myLoginThunkCreator} from "./Redux/AuthReducer";
import {compose} from "redux";


type AppPropsType = {
    myLoginThunkCreator: () => void
}
class App extends React.Component<AppPropsType> {
    componentDidMount() {
     this.props.myLoginThunkCreator();
    }

    render() {
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
    connect(null, {myLoginThunkCreator}))(App);
