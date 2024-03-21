import { instance } from '../../../../axios/config'
import { IAuthor, IBook, IGenre } from '../../models/interface'

const getBooks = async (page?:number, search?:string, author?:number, genre?: number, publisher?:number): Promise<IBook[]> => {
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
        return res.data.results
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

const apiRequest = {
    getBooks,
    getBookById,
    getAuthors,
    getGenres,
    getPublishers
}
export default apiRequest