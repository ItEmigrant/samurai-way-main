import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nawbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {ActualNews} from "./Components/ActualNews/ActualNews";
import {Track} from "./Components/Track/Track";
import {YourSettings} from "./Components/YourSettings/YourSettings";

import {MyFriendsContainer} from "./Components/Friends/myFriendsContainer";
import {store} from "./Redux/reduxStore";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";




const App = () => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                <Route path='/profile' render={() => <Profile
                    /*addStatePostMessage={props.store.addStatePostMessage.bind(store)}*/
                  /*  store={store}*/
                    /* updateNewPostText={props.store.updateNewPostText.bind(store)}*/
                />
                }
                />
                <Route path='/news' component={ActualNews}/>
                <Route path='/music' component={Track}/>
                <Route path='/settings' component={YourSettings}/>
                <Route path='/friends' render={() => <MyFriendsContainer store={store}
                />}/>


            </div>

        </div>


    )
}

export default App;
