import React from 'react';
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'bee85189-718e-4866-92ef-307d2adf5563'
    }
});

export const userApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unFollowUsers(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data)

    },
    FollowUsers(id: number) {
        return instance.post(`follow/${id}`).then(response => response.data)

    },

    myLogin() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me `).then(response => response.data)

    }


}


