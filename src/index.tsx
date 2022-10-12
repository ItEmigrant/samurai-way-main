import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type postsType = {
    id: number
    message: string
    likeCount: number
}

export type dialogsType = {
    id: number
    name: string
}

export type messagesType = {
    id: number
    message: string
}


let posts: Array<postsType> = [
    {id: 1, message: "Hi, how are you?", likeCount: 1},
    {id: 2, message: "My first post!", likeCount: 25},
    {id: 3, message: "Post!", likeCount: 5},
    {id: 4, message: "yo!", likeCount: 20}
];

let dialogs: Array<dialogsType> = [
    {id: 1, name: "Bogdan"},
    {id: 2, name: "Adrian"},
    {id: 3, name: "Artur"},
    {id: 4, name: "Artem"},
    {id: 5, name: "Alisa"}
];

let messages: Array<messagesType> = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "Hello Bro!"},
    {id: 3, message: "Have a nice day!"},
    {id: 4, message: "Yo!"},
    {id: 5, message: ":-)!"}

];

ReactDOM.render(
    <App
        posts={posts}
        dialogs={dialogs}
        messages={messages}/>,
    document.getElementById('root')
);