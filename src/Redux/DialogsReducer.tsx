import {ActionsTypes, dialogsType} from "./store";

export type messagesType = {
    id: number
    message: string
}

export type  dialogPageType = {
    newMessagePostText: string
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}

let initialDialogState: dialogPageType = {
    dialogs: [
        {id: 1, name: "Bogdan"},
        {id: 2, name: "Adrian"},
        {id: 3, name: "Artur"},
        {id: 4, name: "Artem"},
        {id: 5, name: "Alisa"}
    ] as Array<dialogsType>,

    newMessagePostText: "",
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello Bro!"},
        {id: 3, message: "Have a nice day!"},
        {id: 4, message: "Yo!"},
        {id: 5, message: ":-)!"}
    ] as Array<messagesType>

}

export type InitialDialogStateType = typeof initialDialogState

const DialogsReducer = (state = initialDialogState, action: ActionsTypes): InitialDialogStateType => {

    switch (action.type) {
        case "SEND-MESSAGE":
            const newSendMessage: messagesType = {
                id: new Date().getTime(),
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newSendMessage]
            }
        default:
            return state
    }


};
export default DialogsReducer;

export type DialogActionType =
    ReturnType<typeof sendMessageActionCreator>

export const sendMessageActionCreator = (newMessageBody: string) => ({
    type: "SEND-MESSAGE",
    newMessageBody
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

