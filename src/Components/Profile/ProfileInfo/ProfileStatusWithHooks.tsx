import React from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

type stateProfileStatusType = {
    editMode: boolean
    Status: string
}


export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    return (
        <div>
            {
                <div>
                    <span>{props.status || 'No status!!!'}</span>
                </div>
            }

            {false && <div>
                <input autoFocus
                />
            </div>}

        </div>
    );

}








