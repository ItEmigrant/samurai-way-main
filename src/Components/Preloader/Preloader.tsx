import React from 'react';
import s from "../Users/Users.module.css";
import preloader from "../Users/IMG/Spin-1s-200px.svg";

export const Preloader = () => {
    return <img className={s.preloader} src={preloader} alt={'fetching'}/>

};

