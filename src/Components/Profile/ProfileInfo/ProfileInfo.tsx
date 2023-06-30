import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
import {Preloader} from "../../Preloader/Preloader";
import {ProfileType} from "../../../Redux/ProfileReducer";
import {ProfileStatus} from "../ProfileStatus";


type ProfileInfoPropsType = {
    profile: ProfileType | null
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div><img className={s.image}
                      src='https://th.bing.com/th/id/R.954fb2083d4558551f76256530fa7e21?rik=6PFqxPlFR7jJHA&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fsamurai%2fsamurai-07.jpg&ehk=%2fIDimYnMP5aCufQmVxdGJrTpLTwEE2mTMG32M8uzGLY%3d&risl=&pid=ImgRaw&r=0'
                      alt={'Profile'}/>
            </div>
            <ProfileStatus status={'I am samurai'}/>
            <div className={s.item}>
                <img src={props.profile.photos.large} alt={"avatar"}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
};

