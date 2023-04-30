import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/reduxStore";
import {getUsersForProfile, ProfileType} from "../../Redux/ProfileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<PropsParamsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUsersForProfile(userId)
    }


    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <Profile {...this.props}
                     profile={this.props.profile}

            />
        )
    }
}

type mapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean

}

type mapDispatchToPropsType = {
    getUsersForProfile: (userId: string) => void
}
export type CommonProfileType = mapStateToPropsType & mapDispatchToPropsType;

type PropsParamsType = RouteComponentProps<PathParamsType> & CommonProfileType;


let WithRouterDataContainerComponent = withRouter(ProfileContainer);

let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth

    }
}

export default connect(mapStateToProps, {getUsersForProfile})(WithRouterDataContainerComponent)
