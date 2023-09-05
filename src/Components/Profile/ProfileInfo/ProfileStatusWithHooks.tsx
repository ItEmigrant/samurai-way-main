import React, {useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    const activateEditeMode = () => {
        setEditMode(true)
    }

    const deActivateEditeMode = () => {
        setEditMode(false)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditeMode}>{props.status || 'No status!!!'} </span>
                </div>
            }

            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deActivateEditeMode}/>
                </div>}

        </div>
    );

}








