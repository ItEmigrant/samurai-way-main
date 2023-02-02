import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";

import {BrowserRouter} from "react-router-dom";
import {store} from "./Redux/reduxStore";




const rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree);

rerenderEntireTree();





