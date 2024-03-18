import { IAuthenticationState } from '../../../authentication/services/states/authenticationSlice';
import { ILibraryState } from './librarySlice';


interface IState {
    authentication: IAuthenticationState
    library: ILibraryState
}

export const booksInBasketSelector = (state: IState) => state.library.booksInBasket