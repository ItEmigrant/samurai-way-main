import {connect} from "react-redux";
import {Users} from "./Users";
import {ReduxStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {usersType} from "../../Redux/UsersReducer";
import {updateMessageActionCreator} from "../../Redux/DialogsReducer";



type MapStateToProfilePropsType = {
    stateUsersPages: Array<usersType>
}

type MapDispatchToProfilePropsType = {


}


const mapStateToProps = (state: ReduxStateType):MapStateToProfilePropsType => {
    return {
        stateUsersPages: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProfilePropsType  => {
    return {
        updateMessage: (body: string) => {
            dispatch(updateMessageActionCreator(body))
        },
    } // modification

}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)



