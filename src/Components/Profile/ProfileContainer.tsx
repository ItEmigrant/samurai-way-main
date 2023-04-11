import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/reduxStore";
import {ProfileType, setUserProfile} from "../../Redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId:string
}

/*export function withRouter(ProfileContainer:any){
    return(props:any)=>{

        const match  = {params: useParams()};
        return <ProfileContainer {...props}  match = {match}/>
    }
}*/
class ProfileContainer extends React.Component<PropsParamsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`+ userId).then(response => {
            this.props.setUserProfile(
                response.data as ProfileType );
        });
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


type mapStateToPropsType = {
    profile: ProfileType | null
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
export type CommonProfileType = mapStateToPropsType & mapDispatchToPropsType;

type PropsParamsType = RouteComponentProps<PathParamsType> & CommonProfileType;


let WithRouterDataContainerComponent = withRouter(ProfileContainer);

let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(WithRouterDataContainerComponent)
