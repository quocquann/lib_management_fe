import React from 'react'
import BookItem from '../BookItem/BookItem'
import { Container, Grid,  } from '@mui/material'

const BookList: React.FC = () => {
  return (
    <Container>
        <Grid container spacing={2}>
            <Grid item md={3}>
                <BookItem/>
            </Grid>
            <Grid item md={3}>
                <BookItem/>
            </Grid>
            <Grid item md={3}>
                <BookItem/>
            </Grid>
            <Grid item md={3}>
                <BookItem/>
            </Grid>
            <Grid item md={3}>
                <BookItem/>
            </Grid>
            <Grid item md={3}>
                <BookItem/>
            </Grid>
            <Grid item md={3}>
                <BookItem/>
            </Grid>
            <Grid item md={3}>
                <BookItem/>
            </Grid>
        </Grid>

    </Container>
  )
}

export default BookList