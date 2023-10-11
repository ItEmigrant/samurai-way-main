import React from 'react';
import {dialogPageType, sendMessageActionCreator} from "../../Redux/DialogsReducer";
import {ReduxStateType} from "../../Redux/reduxStore";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AuthRedirectComponent} from "../../HOC/AuthRedirectComponent";


type MapStateToPropsType = {
    stateDialogPage: dialogPageType
}

type MapDispatchToPropsType = {
    sendMessage: (newMessage: string) => void
}

export type CommonType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        stateDialogPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageActionCreator(newMessageBody))
        }
    }
}
const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirectComponent
)(Dialogs)

export default DialogsContainer






