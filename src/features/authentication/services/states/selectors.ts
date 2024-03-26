import { ILibraryState } from "../../../library/services/states/librarySlice"
import { IAuthenticationState } from "./authenticationSlice"


interface IState {
    library: ILibraryState
    authentication: IAuthenticationState
}

export const currentUserSelector = (state: IState) => state.authentication.currentUser
export const isLoggedSelector = (state: IState) => state.authentication.isLogged