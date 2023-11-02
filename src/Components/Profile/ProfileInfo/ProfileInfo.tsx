import React, {ChangeEvent} from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
import {Preloader} from "../../../Common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/ProfileReducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import UserPhoto from "../../../assets/images/userSN.jpeg";
import ContactsInfo from "./ContactsInfo";

type ProfileInfoPropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void

}
export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: ProfileInfoPropsType) => {
    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])

        }
    }
    return (
        <div>
            <div><img className={s.image}
                      src='https://th.bing.com/th/id/R.954fb2083d4558551f76256530fa7e21?rik=6PFqxPlFR7jJHA&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fsamurai%2fsamurai-07.jpg&ehk=%2fIDimYnMP5aCufQmVxdGJrTpLTwEE2mTMG32M8uzGLY%3d&risl=&pid=ImgRaw&r=0'
                      alt={'Profile'}/>
            </div>
            <div><b>Status:</b>{<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>}</div>
            <div className={s.item}>
                <img src={profile.photos.large || UserPhoto} className={s.mainPhoto} alt={"avatar"}/>
                {isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
                <div><b>Name:</b>{profile.fullName}</div>
                <div><b>About me:</b> {profile.aboutMe}</div>
                <div><b>Contacts:</b>{Object.keys(profile.contacts).map(key=>{
                   return <ContactsInfo key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}</div>
                <div><b>Looking for a job:</b> {profile.lookingForAJobDescription ? 'yes' : 'no'}</div>
                {profile.lookingForAJob &&
                    <div>
                        <b>My professional skills:</b> {profile.lookingForAJobDescription}
                    </div>}
            </div>
        </div>
    )
};
