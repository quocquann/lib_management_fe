import { ILibraryState } from "../../../library/services/states/librarySlice"
import { IAuthenticationState } from "./authenticationSlice"


interface IState {
    library: ILibraryState
    authentication: IAuthenticationState
}

export const emailSelector = (state:IState) => state.authentication.email
export const passwordSelector = (state: IState) => state.authentication.password