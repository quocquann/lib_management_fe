import axios from 'axios'

export const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}api/`,
})

instance.interceptors.response.use(
    (response) => {
        return response
    }, 
    async (error) => {
        if(!error.response){
            return Promise.reject(error)
        }
        
        const originalRequest = error.config
        if((error.response.status === 401 || error.response.status === 403) && !originalRequest._retry){
            originalRequest._retry = true

            const res = await instance.post('token/refresh/', {
                refresh: localStorage.getItem('refreshToken')
            })

            localStorage.setItem("accessToken", res.data.access)

            return instance(originalRequest)
        }

        return Promise.reject(error)    
    }
)
