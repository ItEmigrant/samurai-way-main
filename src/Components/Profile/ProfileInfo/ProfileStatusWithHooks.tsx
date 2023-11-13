import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void

}


export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);


    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditeMode = () => {
        setEditMode(true)
    }
    const deActivateEditeMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditeMode}>{props.status || 'No status!!!'} </span>
                </div>
            }

            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditeMode} value={status}/>
                </div>}

        </>
    );

}








