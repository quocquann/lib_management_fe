import { Box, Container, Pagination, Typography } from '@mui/material'
import React from 'react'
import HistoryTable from '../../components/HistoryTable/HistoryTable'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { borrowsSelector, numBorrowSelector } from '../../services/states/selector'
import { getBorrowsThunk } from '../../services/states/action'

const HistoryPage:React.FC = () => { 

  const [page, setPage] = React.useState(1)
  const dispatch = useAppDispatch()
  const borrows = useAppSelector(borrowsSelector)
  const numBorrow = useAppSelector(numBorrowSelector)

  React.useEffect(() => {
    dispatch(getBorrowsThunk(page))
  }, [dispatch, page])

  const PAGE_SIZE = 5

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  return (
    <Box marginTop={20}>
        <Container>
            <Typography variant='h5' fontWeight={500} marginBottom={2}>
                Lịch sử
            </Typography>
            <HistoryTable borrows={borrows}/>
            <Box 
              display={'flex'} 
              justifyContent={'flex-end'} 
              marginTop={10}
            >
              {Math.ceil(numBorrow/PAGE_SIZE) <= 1 ? "" : (<Pagination onChange={handlePageChange} page={page} count={Math.ceil(numBorrow/PAGE_SIZE)} shape="rounded" />)}
            </Box>
        </Container>
    </Box>
  )
}

export default HistoryPage