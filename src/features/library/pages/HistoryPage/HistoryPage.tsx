import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import HistoryTable from '../../components/HistoryTable/HistoryTable'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { borrowsSelector } from '../../services/states/selector'
import { getBorrowsThunk } from '../../services/states/action'

const HistoryPage:React.FC = () => { 

  const location = useLocation()
  const dispatch = useAppDispatch()
  const borrows = useAppSelector(borrowsSelector)

  React.useEffect(() => {
    dispatch(getBorrowsThunk())
  }, [dispatch])

  React.useEffect(() => {
    if (!!location.state) {
      console.log(location.state)
      //TODO: handle scroll
    }
  },[location])

  return (
    <Box marginTop={20}>
        <Container>
            <Typography variant='h5' fontWeight={500} marginBottom={2}>
                Lịch sử
            </Typography>
            <HistoryTable borrows={borrows}/>
        </Container>
    </Box>
  )
}

export default HistoryPage