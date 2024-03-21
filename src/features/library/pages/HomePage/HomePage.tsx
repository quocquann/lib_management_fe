import React from 'react'
import BookList from '../../components/BookList/BookList'
import { Box, Container } from '@mui/material'
import CategoryLabel from '../../components/CategoryLabel/CategoryLabel'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { bookListHomePageSelector } from '../../services/states/selector'
import { getBooksThunk } from '../../services/states/action'

const HomePage: React.FC = () => {

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getBooksThunk({}))
  },[dispatch])

  const bookList = useAppSelector(bookListHomePageSelector)

  return (
    <Box marginTop={20}>
      <Container>
        <CategoryLabel text='New arival'/>
        <BookList books={bookList}/>
      </Container>
    </Box>
  )
}

export default HomePage