import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nawbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActualNews} from "./Components/ActualNews/ActualNews";
import {Track} from "./Components/Track/Track";
import {YourSettings} from "./Components/YourSettings/YourSettings";
import {dialogsType, messagesType, postsType} from "./index";

type AppTypeProps = {
    posts: Array<postsType>
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}


const App: React.FC<AppTypeProps> = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <Dialogs
                        dialogs={props.dialogs}
                        messages={props.messages}/>}/>
                    <Route path='/profile' render={() => <Profile
                        posts={props.posts}/>}/>
                    <Route path='/news' component={ActualNews}/>
                    <Route path='/music' component={Track}/>
                    <Route path='/settings' component={YourSettings}/>
                </div>

            </div>

        </BrowserRouter>
    )
}

export default App;
