import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {
    addNewMessagePost,
    addStatePostMessage,
    stateType,
    updateNewPostMessageText,
    updateNewPostText
} from "./Redux/state";


export const rerenderEntireTree = (state: stateType) => {

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
