import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";

import {BrowserRouter} from "react-router-dom";
import {store} from "./Redux/reduxStore";
import {Provider} from "react-redux";


const rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree);

rerenderEntireTree();





