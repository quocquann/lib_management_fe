import { Box, Container, Pagination, Typography } from '@mui/material'
import React from 'react'
import TableRequest from '../../components/TableRequest/TableRequest'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { getRequestsThunk } from '../../services/states/action'
import { numRequestSelector, requestsSelector } from '../../services/states/selector'

const RequestPage:React.FC = () => {

  const [page, setPage] = React.useState(1)

  const dispatch = useAppDispatch()

  const requests = useAppSelector(requestsSelector)
  const numRequest = useAppSelector(numRequestSelector)

  React.useEffect(() => {
    dispatch(getRequestsThunk(page))
  },[dispatch, page])

  const PAGE_SIZE = 5

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  return (
    <Box marginTop={20}>
        <Container>
            <Typography variant='h5' fontWeight={500} marginBottom={4}>
                Yêu cầu mượn
            </Typography>
            <TableRequest requests={requests}/>
            <Box 
              display={'flex'} 
              justifyContent={'flex-end'} 
              marginTop={10}
            >
              {Math.ceil(numRequest/PAGE_SIZE) <= 1 ? "" : (<Pagination onChange={handlePageChange} page={page} count={Math.ceil(numRequest/PAGE_SIZE)} shape="rounded" />)}
            </Box>
        </Container>
    </Box>
  )
}

export default RequestPage