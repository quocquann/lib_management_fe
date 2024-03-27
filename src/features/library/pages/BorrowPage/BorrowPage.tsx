import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import BorrowTable from '../../components/BorrowTable/BorrowTable'
import BorrowForm from '../../components/BorrowForm/BorrowForm'
import { useAppSelector } from '../../../../redux/hook'
import { booksInBasketSelector } from '../../services/states/selector'

const BorrowPage:React.FC = () => {

  const booksInBasket = useAppSelector(booksInBasketSelector)
  
  return (
    <Box marginTop={20}>
        <Container>
            <Typography variant='h5' fontWeight={500} marginBottom={2}>
                Phiếu mượn sách
            </Typography>
            <BorrowTable books={JSON.parse(localStorage.getItem('basket') as string) || booksInBasket}/>
            <Box marginTop={2}>
                <BorrowForm/>
            </Box>
        </Container>
    </Box>
  )
}

export default BorrowPage