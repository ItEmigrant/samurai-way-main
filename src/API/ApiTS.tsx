import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '24ab91d8-66ea-4f7f-ac6f-8f7f48b76f83'
    }
});

export const userApi = {
    async getUsers(currentPage: number, pageSize: number) {
        let response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return await response.data;
    },
    async unFollowUsers(id: number) {
        let response = await instance.delete(`follow/${id}`);
        return await response.data;

    },
    async FollowUsers(id: number) {
        let response = await instance.post(`follow/${id}`);
        return await response.data;
    },

    getUsersForProfile(id: string) {
        console.warn('Obsolete method! Please profileApi used')
        return profileApi.getUsersForProfile(id)
    }
}

export const profileApi = {
    async getUsersForProfile(id: string) {
        let response = await instance.get(`profile/` + id);
        return await response.data;
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<ResponseUpdateApiType>(`profile/status`, {status: status})
    }
}


export const authApi = {
    async myLogin() {
        let response = await instance.get(`auth/me`);
        return await response.data;
    },
    async singIn(email: string, password: string, rememberMe: boolean = false) {
        const response = await instance.post(`auth/login/`, {email, password, rememberMe});
        return response.data;
    },
    async singUp() {
        let response = await instance.delete(`auth/login/`);
        return await response.data;
    }
}

export type ResponseUpdateApiType = {
    resultCode: number,
    messages: string[],
    data: {}
}