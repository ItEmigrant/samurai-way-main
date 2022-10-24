import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: number
    name: string
}

export const DialogItem: React.FC<DialogPropsType> = (props) => {

    let path = '/dialogs/' + props.id;
    return (<div className={s.nameDialog + ' ' + s.active}>
        <NavLink to={path}> <img className={s.img} src="https://th.bing.com/th/id/OIP.Jwa9e-QJ36uwKdADWUaC5gHaEK?pid=ImgDet&rs=1" alt={"ninja"}/>{props.name} </NavLink>
    </div>)
}

