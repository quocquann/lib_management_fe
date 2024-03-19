import { instance } from '../../../../axios/config'
import { IBook } from '../../models/interface'

const getBooks = async (): Promise<IBook[]> => {
    try { 
        const res = await instance.get('books/')
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

const apiRequest = {
    getBooks,
    getBookById
}
export default apiRequest