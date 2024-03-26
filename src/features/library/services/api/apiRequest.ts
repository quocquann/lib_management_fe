import { instance } from '../../../../axios/config'
import { IAuthor, IBook, IBookResponse, IBorrow, IGenre, IRequest, IReview } from '../../models/interface'

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

const getRequest = async () : Promise<IRequest[]> => {
    try {
        const res = await instance.get('requests/', {
            headers: {
                Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ""
            }
        })
        return res.data
    } catch(e) {
        throw e
    }
}

const createRequest = async (start_date: string, end_date: string, type: string, book_ids: number[]) : Promise<IRequest> => {
    try {
        const res = await instance.post("requests/", {
            start_date,
            end_date,
            type,
            book_ids
        }, {
            headers: {
                Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ""
              }
        })
        return res.data
    } catch (e) {
        throw e
    }
} 

const getBorrows = async () : Promise<IBorrow[]> => {
    try {
        const res = await instance.get("borrows/", {
            headers: {
                Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ""
            }
        })

        return res.data
    } catch (e) {
        throw e
    }
}

const getReviews = async (id: string) : Promise<IReview[]> => {
    try {
        const res = await instance.get(`reviews/books/${id}/`)
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
    createRequest,
    getBorrows,
    getReviews
}
export default apiRequest