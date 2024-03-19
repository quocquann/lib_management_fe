import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../models/interface";
import { getBookByIdThunk, getBooksThunk } from "./action";

export interface ILibraryState {
    booksInBasket: IBook[]
    bookDetail: IBook
    bookListHomePage: IBook[],
    isDetailLoading: boolean
}

export const librarySlice = createSlice({
    name: 'library',
    initialState: {
        booksInBasket: [],
        bookDetail: {} as IBook,
        bookListHomePage: [],
        isDetailLoading: false
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
    },
    extraReducers: builder => {
        builder
        .addCase(getBooksThunk.fulfilled, (state, action) => {
            state.bookListHomePage = action.payload
        })
        .addCase(getBooksThunk.rejected, (state, action) => {
            
            console.log(action.error)
        })
        .addCase(getBookByIdThunk.fulfilled, (state, action) => {
            state.bookDetail = action.payload
            state.isDetailLoading = false
        })
        .addCase(getBookByIdThunk.pending, (state, action) => {
            state.isDetailLoading = true
        })
        .addCase(getBookByIdThunk.rejected, (state, action) => {
            state.isDetailLoading = false
            console.log(action.error)
        })
    }
})