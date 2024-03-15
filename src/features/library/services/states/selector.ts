import { ILibraryState, librarySlice } from './librarySlice';


interface IState {
    library: ILibraryState
}

export const booksInBasketSelector = (state: IState) => state.library.booksInBasket