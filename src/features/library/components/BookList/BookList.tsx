import React from 'react'
import BookItem from '../BookItem/BookItem'
import { Box, Container, Grid,  } from '@mui/material'
import {styled} from '@mui/material/styles'
import { Link } from 'react-router-dom'


const CategoryBox = styled(Box)(({theme}) => ({
    width:300,
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: '5px 20px'
})) as typeof Box

const LinkStyled = styled(Box)(({theme}) => ({
    textDecoration: 'none',
    fontWeight: 500,
    color: '#fff',
    ':hover':{
        color: theme.palette.secondary.main
    }
})) as typeof Box

const ContainerStyled = styled(Container)(({theme}) => ({
    marginBottom: 60
})) as typeof Container

const BottomLineBox = styled(Box)({
    borderBottom: '1px solid gray',
    marginBottom: 30
}) as typeof Box

const BookList: React.FC = () => {
  return (
    <ContainerStyled>
        <BottomLineBox component='div'>
            <CategoryBox>
                <LinkStyled component={Link} to="/detail">
                    New Arival
                </LinkStyled>
            </CategoryBox>
        </BottomLineBox>
        <Grid container spacing={3} columns={10}>
            <Grid item xs={2}>
                <BookItem/>
            </Grid>
            <Grid item xs={2}>
                <BookItem/>
            </Grid>
            <Grid item xs={2}>
                <BookItem/>
            </Grid>
            <Grid item xs={2}>
                <BookItem/>
            </Grid>
            <Grid item xs={2}>
                <BookItem/>
            </Grid>
            <Grid item xs={2}>
                <BookItem/>
            </Grid>
            <Grid item xs={2}>
                <BookItem/>
            </Grid>
            <Grid item xs={2}>
                <BookItem/>
            </Grid>
            <Grid item xs={2}>
                <BookItem/>
            </Grid>
            <Grid item xs={2}>
                <BookItem/>
            </Grid>
        </Grid>

    </ContainerStyled>
  )
}

export default BookList