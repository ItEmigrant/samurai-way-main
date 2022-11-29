import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {
    store
} from "./Redux/state";


const rerenderEntireTree = () => {

    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree)

rerenderEntireTree();



