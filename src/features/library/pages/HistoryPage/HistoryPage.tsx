import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import HistoryTable from '../../components/HistoryTable/HistoryTable'

const HistoryPage:React.FC = () => { 

  return (
    <Box marginTop={20}>
        <Container>
            <Typography variant='h5' fontWeight={500} marginBottom={2}>
                Lịch sử
            </Typography>
            <HistoryTable/>
        </Container>
    </Box>
  )
}

export default HistoryPage