import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {
    addNewMessagePost,
    addStatePostMessage, state, subscribe,
    updateNewPostMessageText,
    updateNewPostText
} from "./Redux/state";


const rerenderEntireTree = () => {

    ReactDOM.render(
        <App
            updateNewPostMessageText={updateNewPostMessageText}
            addNewMessagePost={addNewMessagePost}
            state={state}
            addStatePostMessage={addStatePostMessage}
            updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}
subscribe(rerenderEntireTree)

rerenderEntireTree();



