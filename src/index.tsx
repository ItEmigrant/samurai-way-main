import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addStatePostMessage, state} from "./Redux/state";



ReactDOM.render(
    <App
        state={state}
        addStatePostMessage={addStatePostMessage}/>,
    document.getElementById('root')
);