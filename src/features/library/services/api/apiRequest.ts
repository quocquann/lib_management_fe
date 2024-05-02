import { instance } from '../../../../axios/config'
import { IAuthor, IBook, IDeleteRequestResponse, IGenre, IPaginateResponse, IRequest, IReview } from '../../models/interface'

const getBooks = async (page?:number, search?:string, author?:number, genre?: number, publisher?:number): Promise<IPaginateResponse> => {
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

const getRelateBookById = async (id: string): Promise<IBook[]> => {
    try {
        const res = await instance.get(`books/relate-book/${id}`)
        return res.data
    }catch(e) {
        throw e
    }
}

const getMostBorrowBook = async (): Promise<IBook[]> => {
    try {
        const res = await instance.get('books/most-borrow')
        return res.data
    } catch(e) {
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

const getRequest = async (page?: number) : Promise<IPaginateResponse> => {
    try {
        const res = await instance.get('requests/', {
            headers: {
                Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ""
            }, 
            params: {
                page
            }
        })
        return res.data
    } catch(e) {
        throw e
    }
}

const createRequest = async (start_date: string, end_date: string, type: string, book_ids: number[], borrow_id?: number) : Promise<IRequest> => {
    try {
        const res = await instance.post("requests/", {
            start_date,
            end_date,
            type,
            book_ids,
            borrow_id
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

const deleteRequest = async (id: number): Promise<IDeleteRequestResponse> => {
    try {
        const res = await instance.delete(`requests/${id}`, {
            headers: {
                Authorization: localStorage.getItem("accessToken") ? `Bearer ${localStorage.getItem("accessToken")}` : ""
            }
        })
        return res.data
    }catch(e){
        throw e
    }
}

const getBorrows = async (page?:number) : Promise<IPaginateResponse> => {
    try {
        const res = await instance.get("borrows/", {
            headers: {
                Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ""
            },
            params: {
                page
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

const createReview = async (id: string, rating: number, comment_text: string) : Promise<IReview> => {
    try {
        const res = await instance.post(`reviews/books/${id}/`, {
            rating,
            comment_text
        },{
            headers: {
                Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ""
            }
        })
        return res.data
    } catch(e) {
        throw e
    }
}

const apiRequest = {
    getBooks,
    getBookById,
    getRelateBookById,
    getMostBorrowBook,
    getAuthors,
    getGenres,
    getPublishers,
    getRequest,
    createRequest,
    getBorrows,
    getReviews,
    createReview,
    deleteRequest
}
export default apiRequest