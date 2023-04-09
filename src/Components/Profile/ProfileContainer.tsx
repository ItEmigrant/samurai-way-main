import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/reduxStore";
import {ProfileType, setUserProfile} from "../../Redux/ProfileReducer";


class ProfileContainer extends React.Component<CommonProfileType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(
                response.data as any);
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type mapStateToPropsType = {
    profile: any
}

type mapDispatchToPropsType = {
    setUserProfile:(profile:ProfileType)=>void
}
export type CommonProfileType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
     profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
