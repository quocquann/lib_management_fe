import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../models/interface";

export interface ILibraryState {
    booksInBasket: IBook[]
}

export const librarySlice = createSlice({
    name: 'library',
    initialState: {
        booksInBasket: []
    } as ILibraryState,
    reducers: {
        addBookToBasket: (state, action) => {
            if (state.booksInBasket.some(book => book.id === action.payload.id)){
                return
            }
            state.booksInBasket = [...state.booksInBasket, action.payload]
        },
        removeBookToBasket: (state, action) => {
            state.booksInBasket = state.booksInBasket.filter(book => book.id !== action.payload)
        }
    }
})