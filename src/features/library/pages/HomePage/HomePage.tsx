import React from 'react'
import BookList from '../../components/BookList/BookList'
import { Box } from '@mui/material'

const HomePage: React.FC = () => {
  return (
    <Box marginTop={20}>
      <BookList/>
      <BookList/>
      <BookList/>
    </Box>
  )
}

export default HomePage