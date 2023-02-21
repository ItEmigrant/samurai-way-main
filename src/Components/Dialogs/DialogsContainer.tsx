import React from 'react';
import {
    dialogPageType,
    sendMessageActionCreator,
    updateMessageActionCreator
} from "../../Redux/DialogsReducer";
import {ReduxStateType} from "../../Redux/reduxStore";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


/*type DialogsPropsType = {
    store: ReduxStoreType
}*/

type MapStateToPropsType = {
    stateDialogPage: dialogPageType
}

type MapDispatchToPropsType = {
    updateMessage: (body: string) => void
    sendMessage: (newMessage: string) => void

}

/*export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

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
};*/

export type CommonType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        stateDialogPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateMessage: (body: string) => {
            dispatch(updateMessageActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator(''))
        }

    }

}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);






