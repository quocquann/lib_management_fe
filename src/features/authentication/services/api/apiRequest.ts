import { instance } from "../../../../axios/config"
import { ILoginResponse, IUser } from "../../models/interface"


const login = async (email: string, password: string) : Promise<ILoginResponse> => {
    try {
        const res = await instance.post("auth/login/", {
            email,
            password
        })
        return res.data
    }catch (e) {
        throw e
    }
}

const getCurrentUser = async () : Promise<IUser> => {
    try {
        const res = await instance.get("user/", {
            headers: {
                Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ""
            }
        })
        return res.data
    } catch(e) {
        throw e
    }
}

const apiRequest = {
    login,
    getCurrentUser
}

export default apiRequest