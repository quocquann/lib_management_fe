export interface IBook {
    id: number
    title: string
    image: string
    isbn: string
    describe: string
    author: string
    genre: string
    publisher: string 
    rating: number
    available: number  
}

export interface IAuthor {
    id: number
    name: string
}

export interface IGenre {
    id: number
    name: string
}

export interface IPublisher {
    id: number
    name: string
}

export interface IRequest {
    id: number
    start_date: string
    end_date: string
    status: string
    type: string
    reject_reason: string
    books: IBook[]
    borrow: number
}

export interface IDeleteRequestResponse {
    id: number
}

export interface IBorrow {
    id: number
    borrow_date: string
    return_date: string
    actual_return_date: string
    status: string
    books: IBook[]
    overdue: boolean
}

export interface IPaginateResponse {
    count: number
    next: string | null
    previous: string | null
    results: IBorrow[] | IBook[] | IRequest[]
}

export interface IReview {
    id: number,
    rating: number,
    comment_text: string
    user: string
}
