import { IAuthenticationState } from '../../../authentication/services/states/authenticationSlice';
import { ILibraryState } from './librarySlice';


interface IState {
    authentication: IAuthenticationState
    library: ILibraryState
}

export const booksInBasketSelector = (state: IState) => state.library.booksInBasket
export const bookDetailSelector = (state: IState) => state.library.bookDetail
export const bookListHomePageSelector = (state: IState) => state.library.bookListHomePage
export const isDetailLoadingSelector = (state: IState) => state.library.isDetailLoading
export const authorsSelector = (state:IState) => state.library.authors
export const genresSelector = (state:IState) => state.library.genres
export const publishersSelector = (state:IState) => state.library.publishers