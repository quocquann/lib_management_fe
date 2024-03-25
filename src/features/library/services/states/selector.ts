import { IAuthenticationState } from '../../../authentication/services/states/authenticationSlice';
import { ILibraryState } from './librarySlice';


interface IState {
    authentication: IAuthenticationState
    library: ILibraryState
}

export const booksInBasketSelector = (state: IState) => state.library.booksInBasket
export const bookDetailSelector = (state: IState) => state.library.bookDetail
export const allBooksSelector = (state: IState) => state.library.allBooks
export const isDetailLoadingSelector = (state: IState) => state.library.isDetailLoading
export const authorsSelector = (state:IState) => state.library.authors
export const genresSelector = (state:IState) => state.library.genres
export const publishersSelector = (state:IState) => state.library.publishers
export const searchStringSelector = (state: IState) => state.library.searchString
export const listTitleSelector = (state: IState) => state.library.listTitle
export const isSearchBookLoadingSelector = (state: IState) => state.library.isSearchBookLoading
export const numBookSelector = (state: IState) => state.library.numBook
export const requestsSeletor = (state: IState) => state.library.requests