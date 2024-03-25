import { instance } from '../../../../axios/config'
import { IAuthor, IBook, IBookResponse, IGenre } from '../../models/interface'

const getBooks = async (page?:number, search?:string, author?:number, genre?: number, publisher?:number): Promise<IBookResponse> => {
    try { 
        const res = await instance.get('books/', {
            params: {
                page,
                search,
                author,
                genre,
                publisher
            }
        })
        return res.data
    } catch(e) {
        throw e
    }
}

const getBookById = async (id: string): Promise<IBook> => {
    try{
        const res = await instance.get(`books/${id}`)
        return res.data
    }catch(e){
        throw e
    }
}

const getAuthors = async (): Promise<IAuthor[]> => {
    try {
        const res = await instance.get('authors/')
        return res.data.results
    } catch(e) {
        throw e
    }
}

const getGenres = async (): Promise<IGenre[]> => {
    try {
        const res = await instance.get('genres/')
        return res.data.results
    } catch (e) {
        throw e
    }
}

const getPublishers = async () : Promise<IAuthor[]> => {
    try {
        const res = await instance.get('publishers/')
        return res.data.results
    } catch (e) {
        throw e
    }
}

const getRequest = async () => {
    try {
        const res = await instance.get('requests/', {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExMzY0NzE5LCJpYXQiOjE3MTEzNjExMTksImp0aSI6ImVkOTZiZDA3MzAyNTRkOGZiM2EyZjg4MmI2MmU3M2MxIiwidXNlcl9pZCI6MX0.wH-uVcrpNj_JChDsspjeUUksmpkupo9-bKT7BnuzhE8`
              }
        })
        return res.data
    } catch(e) {
        throw e
    }
}

const createRequest = async (start_date: string, end_date: string, type: string, book_ids: number[]) => {
    try {
        const res = await instance.post("requests/", {
            start_date,
            end_date,
            type,
            book_ids
        }, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExMzY0NzE5LCJpYXQiOjE3MTEzNjExMTksImp0aSI6ImVkOTZiZDA3MzAyNTRkOGZiM2EyZjg4MmI2MmU3M2MxIiwidXNlcl9pZCI6MX0.wH-uVcrpNj_JChDsspjeUUksmpkupo9-bKT7BnuzhE8`
              }
        })
        return res.data
    } catch (e) {
        throw e
    }
} 

const apiRequest = {
    getBooks,
    getBookById,
    getAuthors,
    getGenres,
    getPublishers,
    getRequest,
    createRequest
}
export default apiRequest