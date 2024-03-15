import React from 'react'
import BookItem from '../BookItem/BookItem'
import { Container, Grid,  } from '@mui/material'
import {styled} from '@mui/material/styles'
import { IBook } from '../../models/interface'



const ContainerStyled = styled(Container)(({theme}) => ({
    marginBottom: 60
})) as typeof Container


interface IBookList{
    full?: boolean
    books: IBook[]
}

const BookList: React.FC<IBookList> = ({full=true, books}) => {
  return (
    <ContainerStyled>
        <Grid container spacing={3} columns={full ? 10 : 12}>
            {books.map(book => (
                <Grid key={book.id} item xs={full ? 2 : 3}>
                    <BookItem book={book}/>
                </Grid>
            ))} 
        </Grid>

    </ContainerStyled>
  )
}

export default BookList