import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
type contactsInfoPropsType = {
    contactTitle: string
    contactValue: string
}
const ContactsInfo = ({contactTitle, contactValue}: contactsInfoPropsType) => {

    return <div className={s.contacts}>
        <b> {contactTitle}:</b> {contactValue}
    </div>
};

export default ContactsInfo;