import { createSlice } from "@reduxjs/toolkit";
import { IAuthor, IBook, IGenre, IPublisher } from "../../models/interface";
import { getAuthorsThunk, getBookByIdThunk, getBooksThunk, getGenresThunk, getPublishersThunk } from "./action";

export interface ILibraryState {
    booksInBasket: IBook[]
    bookDetail: IBook
    allBooks: IBook[],
    isDetailLoading: boolean,
    authors: IAuthor[],
    genres: IGenre[],
    publishers: IPublisher[],
    searchString: string,
    listTitle: string,
    isSearchBookLoading: boolean,
    numBook: number
}

export const librarySlice = createSlice({
    name: 'library',
    initialState: {
        booksInBasket: [],
        bookDetail: {} as IBook,
        allBooks: [],
        isDetailLoading: false,
        authors: [],
        genres: [],
        publishers: [],
        searchString: "",
        listTitle: "Tất cả",
        isSearchBookLoading: false,
        numBook: 0
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
        },
        setListTitle: (state, action) => {
            state.listTitle = action.payload
        },
        setSearchString: (state, action) => {
            state.searchString = action.payload
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getBooksThunk.pending, (state) => {
            state.isSearchBookLoading = true
        })
        .addCase(getBooksThunk.fulfilled, (state, action) => {
            state.allBooks = action.payload.results
            state.numBook = action.payload.count
            state.isSearchBookLoading = false
        })
        .addCase(getBooksThunk.rejected, (state, action) => {            
            console.log(action.error)
            state.isSearchBookLoading = false
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
            state.authors = action.payload.results
        })
        .addCase(getGenresThunk.fulfilled, (state, action) => {
            state.genres = action.payload.results
        })
        .addCase(getPublishersThunk.fulfilled, (state, action) => {
            state.publishers = action.payload.results
        })
    }
})