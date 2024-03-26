
export interface IUser {
    id: number
    username: string
    email: string
    role: string
}

export interface ILoginResponse {
    refresh: string
    access: string
}