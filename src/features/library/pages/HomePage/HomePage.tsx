import React from 'react'
import BookList from '../../components/BookList/BookList'
import { Box, Container } from '@mui/material'
import CategoryLabel from '../../components/CategoryLabel/CategoryLabel'
import { bookList } from '../../../../shared/mocks/bookList'

const HomePage: React.FC = () => {
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