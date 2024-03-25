export interface IBook {
    id: number
    title: string
    image: string
    isbn: string
    describe: string
    author: string
    genre: string
    publisher: string   
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

export interface IBookResponse {
    count: number
    next: string | null
    previous: string | null
    results: IBook[]
}

export interface IRequest {
    id: number
    start_date: string
    end_date: string
    status: string
    type: string
    reject_reason: string
    books: IBook[]
}