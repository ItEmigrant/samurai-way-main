import React from 'react';
import {ActionsTypes, dialogPageType, messagesType,} from "./state";

const DialogsReducer = (state: dialogPageType, action: ActionsTypes) => {

    switch (action.type) {
        case "SEND-MESSAGE":
            const newSendMessage: messagesType = {
                id: new Date().getTime(),
                message: state.newMessagePostText
            };
            state.messages.push(newSendMessage)
            state.newMessagePostText = "";

            return state

        case "UPDATE-NEW-POST-MESSAGE-TEXT":
            state.newMessagePostText = action.messageDialogs;
            return state

        default:
            return state


    }


};
export default DialogsReducer;

export type DialogActionType = ReturnType<typeof sendMessageActionCreator> |  ReturnType<typeof updateMessageActionCreator>

export const sendMessageActionCreator = (newSendMessage: string) => ({
    type: "SEND-MESSAGE",
    newSendMessage: newSendMessage
}) as const

export const updateMessageActionCreator = (messageDialogs: string) => ({
    type: "UPDATE-NEW-POST-MESSAGE-TEXT",
    messageDialogs: messageDialogs
}) as const


/*
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
*/

