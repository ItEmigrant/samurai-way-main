import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addStatePostMessage, stateType, updateNewPostText} from "./Redux/state";


export const rerenderEntireTree = (state:stateType) => {

    ReactDOM.render(
        <App
            state={state}
            addStatePostMessage={addStatePostMessage}
            updateNewPostText={updateNewPostText }/>,
        document.getElementById('root')
    );
}
