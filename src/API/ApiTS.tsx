import React from 'react';
import axios from "axios";


export const GetUsers = (currentPage:number, pageSize:number) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {

        withCredentials: true
    })

};


