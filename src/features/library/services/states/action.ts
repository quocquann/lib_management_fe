import { createAsyncThunk } from "@reduxjs/toolkit";
import apiRequest from "../api/apiRequest";

interface IGetBooksThunkParam {
    page?:number,
    search?:string
    author?:number,
    genre?:number,
    publisher?:number
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