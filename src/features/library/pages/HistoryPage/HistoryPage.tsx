import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import HistoryTable from '../../components/HistoryTable/HistoryTable'
import { useLocation } from 'react-router-dom'

const HistoryPage:React.FC = () => { 

  const location = useLocation()

  React.useEffect(() => {
    if (!!location.state) {
      console.log(location.state)
      //TODO: handle
    }
  },[location])

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