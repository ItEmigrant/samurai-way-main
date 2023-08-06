import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/reduxStore";
import {getStatus, getUsersForProfile, ProfileType, updateStatus} from "../../Redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AuthRedirectComponent} from "../../HOC/AuthRedirectComponent";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<PropsParamsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(this.props.myUserId)
        }
        this.props.getUsersForProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}


type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
    myUserId: number | null
    isAuth: boolean
}

type mapDispatchToPropsType = {
    getUsersForProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
export type CommonProfileType = mapStateToPropsType & mapDispatchToPropsType;

type PropsParamsType = RouteComponentProps<PathParamsType> & CommonProfileType;


let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        myUserId: state.auth.userId,
        isAuth: state.auth.isAuth

    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersForProfile, getStatus, updateStatus}),
    withRouter,
    AuthRedirectComponent
)
(ProfileContainer)