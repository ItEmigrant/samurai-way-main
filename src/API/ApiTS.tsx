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

    getUsersForProfile(id: string) {
        console.warn('Obsolete method! Please profileApi used')
        return profileApi.getUsersForProfile(id)
    }
}

export const profileApi = {
    getUsersForProfile(id: string) {
        return instance.get(`profile/` + id).then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}


export const authApi = {
    myLogin() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    singIn(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login/`, {email, password, rememberMe}).then(response => response.data)
    },
    singUp() {
        return instance.post(`auth/login/`);
    },

}


