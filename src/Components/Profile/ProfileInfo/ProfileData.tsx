import React from 'react';
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import ContactsInfo from "./ContactsInfo";
import {ProfileType} from "../../../Redux/ProfileReducer";

type ProfileDataPropsType = {
    profile: ProfileType | null
    updateStatus: (status: string) => void
    status: string
    isOwner: boolean
    activeEditMode:()=>void
}
const ProfileData = ({profile, updateStatus, status, isOwner, activeEditMode}: ProfileDataPropsType) => {
    if (profile) {
        return <div>
            <div><b>Status:</b> {<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>}</div>
            <div><b>Name:</b>{profile.fullName}</div>
            <div><b>About me:</b> {profile.aboutMe}</div>
            <div><b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
                return <ContactsInfo key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}</div>
            <div><b>Looking for a job:</b> {profile.lookingForAJobDescription ? 'yes' : 'no'}</div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {profile.lookingForAJobDescription}
                </div>}
            {isOwner && <div>
                <button onClick={activeEditMode}>Update</button>
            </div>}
        </div>
    }
    return null;
};

export default ProfileData;


