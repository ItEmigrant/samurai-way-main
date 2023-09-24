import React from 'react';
import s from "../../Components/Users/Users.module.css";
import preloader from "../../Components/Users/IMG/Spin-1s-200px.svg";

export const Preloader = () => {
    return <img className={s.preloader} src={preloader} alt={'fetching'}/>

};

