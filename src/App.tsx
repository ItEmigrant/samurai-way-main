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
import {stateType} from "./Redux/state";
import {MyFriends} from "./Components/Friends/myFriends";


type AppTypeProps = {
    state: stateType;
    updateNewPostMessageText:(messageDialogs:string)=>void
    addNewMessagePost:(messageDialogs:string)=>void
    addStatePostMessage: (postMessage: string) => void
    updateNewPostText: (postMessage: string) => void
}

const App: React.FC<AppTypeProps> = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <Dialogs
                        state={props.state.dialogsPage}
                        newMessagePostText={props.state.dialogsPage.newMessagePostText}
                        addNewMessagePost={props.addNewMessagePost}
                        updateNewPostMessageText={props.updateNewPostMessageText}
                    />
                    }/>
                    <Route path='/profile' render={() => <Profile
                        addStatePostMessage={props.addStatePostMessage}
                        state={props.state.profilePage}
                        messageForNewPosts={props.state.profilePage.messageForNewPosts}
                        updateNewPostText={props.updateNewPostText}/>
                    }
                    />
                    <Route path='/news' component={ActualNews}/>
                    <Route path='/music' component={Track}/>
                    <Route path='/settings' component={YourSettings}/>
                    <Route path='/friends' render={() => <MyFriends state={props.state.sidebar.friends}/>}/>


                </div>

            </div>

        </BrowserRouter>
    )
}

export default App;
