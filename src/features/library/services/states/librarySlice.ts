import { createSlice } from "@reduxjs/toolkit";
import { IAuthor, IBook, IBorrow, IGenre, IPublisher, IRequest, IReview } from "../../models/interface";
import { createRequestThunk, createReviewThunk, getAuthorsThunk, getBookByIdThunk, getBooksThunk, getBorrowsThunk, getGenresThunk, getPublishersThunk, getRequestsThunk, getReviewsThunk } from "./action";
import { ETypeAlert, showAlert } from "../../../../shared/helpers/alert";

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
    numBook: number,
    requests: IRequest[],
    borrows: IBorrow[],
    reviews: IReview[]
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
        numBook: 0,
        requests: [],
        borrows: [],
        reviews: []
    } as ILibraryState,
    reducers: {
        addBookToBasket: (state, action) => {
            if (state.booksInBasket.some(book => book.id === action.payload.id)){
                return
            }
            state.booksInBasket = [...state.booksInBasket, action.payload]
            localStorage.setItem('basket', JSON.stringify(state.booksInBasket))
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
            state.authors = action.payload
        })
        .addCase(getGenresThunk.fulfilled, (state, action) => {
            state.genres = action.payload
        })
        .addCase(getPublishersThunk.fulfilled, (state, action) => {
            state.publishers = action.payload
        })
        .addCase(createRequestThunk.pending, (state) => {
            //TODO: Create request pending
        })
        .addCase(createRequestThunk.fulfilled, (state, action) => {
            console.log(action)
            showAlert('Tạo yêu cầu mượn sách thành công', ETypeAlert.SUCCESS)
            localStorage.removeItem('basket')
        })
        .addCase(createRequestThunk.rejected, (state, action) => {
            console.log(action)
            showAlert(action.payload as string, ETypeAlert.ERROR)
        })
        .addCase(getRequestsThunk.fulfilled, (state, action) => {
            state.requests = action.payload

        })
        .addCase(getBorrowsThunk.pending, (state, action) => {
            //TODO: Get borrows peding
        })
        .addCase(getBorrowsThunk.fulfilled, (state, action) => {
            state.borrows = action.payload
        })
        .addCase(getBorrowsThunk.rejected, (state, action) => {
            //TODO: Get borrows rejected
        })
        .addCase(getReviewsThunk.pending, (state, action) => {
            //TODO: Get review pending
        })
        .addCase(getReviewsThunk.fulfilled, (state, action) => {
            state.reviews = action.payload
        })
        .addCase(createReviewThunk.fulfilled, () => {
            showAlert('Đánh giá thành công', ETypeAlert.SUCCESS)
        })
    }
})