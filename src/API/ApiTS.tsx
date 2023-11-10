import axios from "axios";
import {usersType} from "../Redux/Users/UsersReducer";
import {ProfileType} from "../Redux/ProfileReducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '24ab91d8-66ea-4f7f-ac6f-8f7f48b76f83'
    }
});

export const userApi = {
    async getUsers(currentPage: number, pageSize: number) {
        let response = await instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`);
        return response.data
    },

    async unFollowUsers(id: number) {
        let response = await instance.delete<ResponseApiType<{}>>(`follow/${id}`);
        return response.data;

    },
    async FollowUsers(id: number) {
        let response = await instance.post<ResponseApiType<{}>>(`follow/${id}`);
        return response.data;
    },

    getUsersForProfile(id: string) {
        //console.warn('Obsolete method! Please profileApi used')
        return profileApi.getUsersForProfile(id)
    }
}

export const profileApi = {
    async getUsersForProfile(id: string) {
        let response = await instance.get(`profile/` + id);
        return await response.data;
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<ResponseApiType<{}>>(`profile/status`, {status: status})
    },
    async savePhoto(file: File) {
        const formData = new FormData();
        formData.append('image', file);
        let res = await instance.put<ResponseApiType<savePhotoType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    },
    async saveProfile(profile: ProfileType) {
        let res = await instance.put<any>(`profile`, profile)
        return res.data
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

export const securityApi = {
    async getCaptchaUrl() {
                let response = await instance.get<getCaptchaUrlType>(`/security/get-captcha-url`);
        return response.data.url;
    }
}


//types
type ResponseApiType<T> = {
    resultCode: number,
    messages: string[],
    data: T
}

type savePhotoType = {
    photos: { small: string, large: string }
}

type getCaptchaUrlType = {
    url: string
}

type getUsersResponseType = {
    error: number,
    items: usersType[],
    totalCount: number
}



