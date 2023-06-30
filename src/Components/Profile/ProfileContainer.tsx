import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/reduxStore";
import {getUsersForProfile, ProfileType} from "../../Redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AuthRedirectComponent} from "../../HOC/AuthRedirectComponent";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<PropsParamsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUsersForProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}

            />
        )
    }
}


type mapStateToPropsType = {
    profile: ProfileType | null
}

type mapDispatchToPropsType = {
    getUsersForProfile: (userId: string) => void
}
export type CommonProfileType = mapStateToPropsType & mapDispatchToPropsType;

type PropsParamsType = RouteComponentProps<PathParamsType> & CommonProfileType;


let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,

    }
}



/*let WithRouterDataContainerComponent = withRouter(ProfileContainer);

export const AuthRedirectComponent(connect(mapStateToProps, {getUsersForProfile})(WithRouterDataContainerComponent))*/


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersForProfile}),
    withRouter,
    AuthRedirectComponent
)
(ProfileContainer)