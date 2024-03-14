import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import BorrowTable from '../../components/BorrowTable/BorrowTable'
import BorrowForm from '../../components/BorrowForm/BorrowForm'

const BorrowPage:React.FC = () => {
  
  return (
    <Box marginTop={20}>
        <Container>
            <Typography variant='h5' fontWeight={500} marginBottom={2}>
                Phiếu mượn sách
            </Typography>
            <BorrowTable/>
            <Box marginTop={2}>
                <BorrowForm/>
            </Box>
        </Container>
    </Box>
  )
}

export default BorrowPage