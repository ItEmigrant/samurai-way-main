import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {
    store
} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree)

rerenderEntireTree();



