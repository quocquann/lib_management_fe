import { instance } from '../../../../axios/config'
import { IAuthor, IBook, IBookResponse, IGenre, IListFilterResponse } from '../../models/interface'

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

const getAuthors = async (): Promise<IListFilterResponse> => {
    try {
        const res = await instance.get('authors/')
        console.log(res.data)
        return res.data.results
    } catch(e) {
        throw e
    }
}

const getGenres = async (): Promise<IListFilterResponse> => {
    try {
        const res = await instance.get('genres/')
        return res.data
    } catch (e) {
        throw e
    }
}

const getPublishers = async () : Promise<IListFilterResponse> => {
    try {
        const res = await instance.get('publishers/')
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
    getPublishers
}
export default apiRequest