import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nawbar/Navbar";
import {Route} from "react-router-dom";
import {ActualNews} from "./Components/ActualNews/ActualNews";
import {Track} from "./Components/Track/Track";
import {YourSettings} from "./Components/YourSettings/YourSettings";

import {MyFriendsContainer} from "./Components/Friends/myFriendsContainer";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UserContainer} from "./Components/Users/UserContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";






const App = () => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                <Route path='/profile' render={() => <ProfileContainer/>}/>

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

export default App;
