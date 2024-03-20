import { createSlice } from "@reduxjs/toolkit";
import { IAuthor, IBook, IGenre, IPublisher } from "../../models/interface";
import { getAuthorsThunk, getBookByIdThunk, getBooksThunk, getGenresThunk, getPublishersThunk } from "./action";

export interface ILibraryState {
    booksInBasket: IBook[]
    bookDetail: IBook
    bookListHomePage: IBook[],
    isDetailLoading: boolean,
    authors: IAuthor[],
    genres: IGenre[],
    publishers: IPublisher[]
}

export const librarySlice = createSlice({
    name: 'library',
    initialState: {
        booksInBasket: [],
        bookDetail: {} as IBook,
        bookListHomePage: [],
        isDetailLoading: false,
        authors: [],
        genres: [],
        publishers: []
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
        .addCase(getAuthorsThunk.fulfilled, (state, action) => {
            state.authors = action.payload
        })
        .addCase(getGenresThunk.fulfilled, (state, action) => {
            state.genres = action.payload
        })
        .addCase(getPublishersThunk.fulfilled, (state, action) => {
            state.publishers = action.payload
        })
    }
})