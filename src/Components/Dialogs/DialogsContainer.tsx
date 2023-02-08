import React from 'react';
import {sendMessageActionCreator, updateMessageActionCreator} from "../../Redux/DialogsReducer";
import {ReduxStoreType} from "../../Redux/reduxStore";
import {Dialogs} from "./Dialogs";


type DialogsPropsType = {
    store: ReduxStoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    let state = props.store.getState().dialogPage

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator(state.newMessagePostText))
    }

    const messagePostChange = (body: string) => {
        props.store.dispatch(updateMessageActionCreator(body))
    }

    return (
        <div>
            <Dialogs updateMessage={messagePostChange}
                     sendMessage={sendMessage}
                     state={state}/>
        </div>
    );
};

