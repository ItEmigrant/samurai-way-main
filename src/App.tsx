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
import {storeType} from "./Redux/state";
import {MyFriends} from "./Components/Friends/myFriends";


type AppTypeProps = {
    store: storeType;


}

const App: React.FC<AppTypeProps> = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <Dialogs
                        state={props.store.getState().dialogsPage}
                        newMessagePostText={props.store.getState().dialogsPage.newMessagePostText}
                        dispatch={props.store.dispatch.bind(props.store)}
                       /* updateNewPostMessageText={props.store.dispatch.bind(props.store)}*/
                    />
                    }/>
                    <Route path='/profile' render={() => <Profile
                        /*addStatePostMessage={props.store.addStatePostMessage.bind(store)}*/
                        state={props.store.getState().profilePage}
                        messageForNewPosts={props.store.getState().profilePage.messageForNewPosts}
                       /* updateNewPostText={props.store.updateNewPostText.bind(store)}*/
                        dispatch={props.store.dispatch.bind(props.store)}/>
                    }
                    />
                    <Route path='/news' component={ActualNews}/>
                    <Route path='/music' component={Track}/>
                    <Route path='/settings' component={YourSettings}/>
                    <Route path='/friends' render={() => <MyFriends state={props.store.getState().sidebar.friends}/>}/>


                </div>

            </div>

        </BrowserRouter>
    )
}

export default App;
