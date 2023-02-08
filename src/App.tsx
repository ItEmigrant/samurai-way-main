import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nawbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {ActualNews} from "./Components/ActualNews/ActualNews";
import {Track} from "./Components/Track/Track";
import {YourSettings} from "./Components/YourSettings/YourSettings";
import {ReduxStoreType} from "./Redux/reduxStore";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {MyFriendsContainer} from "./Components/Friends/myFriendsContainer";


type AppTypeProps = {
    store: ReduxStoreType;

}

const App: React.FC<AppTypeProps> = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() => <DialogsContainer
                    store={props.store}
                    /*  dispatch={props.store.dispatch.bind(props.store)}*/
                    /* updateNewPostMessageText={props.store.dispatch.bind(props.store)}*/
                />
                }/>
                <Route path='/profile' render={() => <Profile
                    /*addStatePostMessage={props.store.addStatePostMessage.bind(store)}*/
                    store={props.store}
                    /* updateNewPostText={props.store.updateNewPostText.bind(store)}*/
                />
                }
                />
                <Route path='/news' component={ActualNews}/>
                <Route path='/music' component={Track}/>
                <Route path='/settings' component={YourSettings}/>
                <Route path='/friends' render={() => <MyFriendsContainer store={props.store}
                />}/>


            </div>

        </div>


    )
}

export default App;
