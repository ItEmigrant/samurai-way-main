import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addStatePostMessage, stateType} from "./Redux/state";


export const rerenderEntireTree = (state:stateType) => {

    ReactDOM.render(
        <App
            state={state}
            addStatePostMessage={addStatePostMessage}/>,
        document.getElementById('root')
    );
}
