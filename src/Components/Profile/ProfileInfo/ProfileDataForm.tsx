import {CreateField, Input, Textarea} from "../../../Common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../Redux/ProfileReducer";
import ContactsInfo from "./ContactsInfo";


const ProfileDataForm = (props: ProfileDataFormProps) => {
    const {handleSubmit, profile} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <b>Name:</b>{CreateField('Name', 'fullName', [], Input, {}, '')}
                </div>
                <div><b>About me:</b> {CreateField('About me', 'aboutMe', [], Textarea, {type: 'textarea'}, '')}</div>

                <div><b>Contacts:</b>{Object.keys(profile.contacts).map(key => {

                    return <ContactsInfo key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}</div>

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
type ProfileDataFormProps = InjectedFormProps<ProfileType, { profile: ProfileType }> & { profile: ProfileType }


const ProfileDataFormRedux = reduxForm<ProfileType, { profile: ProfileType }>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormRedux