import {CreateField, Input, Textarea} from "../../../Common/FormsControls/FormsControls";
import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../Redux/ProfileReducer";


const ProfileDataForm = ({handleSubmit}: InjectedFormProps<ProfileDataFormType>) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div><b>Status:</b> {}</div>
                <div><b>Name:</b>{CreateField('Name', 'fullName', [], Input, {}, '')}</div>
                <div><b>About me:</b> {CreateField('About me', 'aboutMe', [], Textarea, {type: 'textarea'}, '')}</div>
                {/* <div><b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
                    return <ContactsInfo key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}</div>*/}
                <div><b>Looking for a job:</b> {CreateField('', 'lookingForAJob', [], Input, {type: 'checkbox'}, '')}
                </div>

                <div>
                    <b>My professional
                        skills:</b> {CreateField('skills', 'lookingForAJobDescription', [], Textarea, {}, '')}
                </div>
                <div>
                    <button>Save</button>
                </div>
            </div>
        </form>
    );
};


//types
export type ProfileDataFormType = {
    profile: ProfileType | null
    updateStatus: (status: string) => void
    status: string
    isOwner: boolean
    activeEditMode: () => void

}

const ProfileDataFormRedux = reduxForm<ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormRedux