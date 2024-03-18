export interface IBook {
    id: number
    title: string
    image: string
    isbn: string
    author: string
    genre: string
    publisher: string   
}

export interface IAuthor {
    id: number,
    name: string
}

export interface IGenre {
    id: number,
    name: string
}

export interface IPublisher {
    id: number,
    name: string
}