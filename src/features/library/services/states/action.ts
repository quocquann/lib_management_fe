import { createAsyncThunk } from "@reduxjs/toolkit";
import apiRequest from "../api/apiRequest";

interface IGetBooksThunkParam {
    page?:number,
    search?:string
    author?:number,
    genre?:number,
    publisher?:number
}

interface ICreaterequestThunkData {
    start_date: string
    end_date: string
    type: string
    book_ids: number[]
}

interface ICreateReviewThunkParam {
    id: string
    rating: number
    comment_text: string
}

export const getBooksThunk = createAsyncThunk('book/getBooks', async ({
    page,
    search,
    author,
    genre,
    publisher
}:IGetBooksThunkParam) => {
    try {
        const data = await apiRequest.getBooks(page, search, author, genre, publisher)
        return data
    }catch(e) {
        throw e
    } 
})

export const getBookByIdThunk = createAsyncThunk('book/getBookById', async (id: string) => {
    try {
        const data = await apiRequest.getBookById(id)
        return data
    }catch(e) {
        throw e
    }
})

export const getAuthorsThunk = createAsyncThunk('author/getAuthors', async () => {
    try {
        const data = await apiRequest.getAuthors()
        return data
    } catch (e){
        throw e
    }
})

export const getGenresThunk = createAsyncThunk('genre/getGenres', async () => {
    try {
        const data = apiRequest.getGenres()
        return data
    } catch (e) {
        throw e
    }
})

export const getPublishersThunk = createAsyncThunk('publisher/getPublishers', async () => {
    try {   
        const data = apiRequest.getPublishers()
        return data
    } catch (e) {
        throw e
    }
})

export const getRequestsThunk = createAsyncThunk('requests/getRequests', async () => {
    try {
        const data = apiRequest.getRequest()
        return data
    }catch(e) {
        throw e
    }
})

export const createRequestThunk = createAsyncThunk('request/createRequests', async ({
    start_date,
    end_date,
    type,
    book_ids
}:ICreaterequestThunkData) => {
    try {
        const data = apiRequest.createRequest(
            start_date,
            end_date,
            type,
            book_ids
        )
        console.log(data)
        return data
    } catch(e) {
        throw e
    }
})

export const getBorrowsThunk = createAsyncThunk('borrow/getBorrows', async () => {
    try {
        const data = apiRequest.getBorrows()
        return data
    }catch(e) {
        throw e
    }
})

export const getReviewsThunk = createAsyncThunk('review/getReiviews', async (id: string) => {
    try {
        const data = apiRequest.getReviews(id)
        return data
    } catch(e) {
        throw e
    }
})

export const createReviewThunk = createAsyncThunk('review/createReview', async ({
    id, rating, comment_text
}:ICreateReviewThunkParam) => {
    try {
        const data = await apiRequest.createReview(id, rating, comment_text)
        return data
    } catch(e) {
        throw e
    }
})