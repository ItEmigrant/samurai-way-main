import React from 'react';
import {ActionsTypes, dialogPageType, messagesType, } from "./state";

const DialogsReducer = (state: dialogPageType, action: ActionsTypes) => {

    if (action.type === "SEND-MESSAGE") {
        const newSendMessage: messagesType = {
            id: new Date().getTime(),
            message: state.newMessagePostText
        };
        state.messages.push(newSendMessage)
        state.newMessagePostText = "";


    } else if (action.type === "UPDATE-NEW-POST-MESSAGE-TEXT") {
        state.newMessagePostText = action.messageDialogs;


    }


    return state

};
export default DialogsReducer;

