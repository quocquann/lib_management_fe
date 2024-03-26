import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import TableRequest from '../../components/TableRequest/TableRequest'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { getRequestsThunk } from '../../services/states/action'
import { requestsSelector } from '../../services/states/selector'

const RequestPage:React.FC = () => {

  const dispatch = useAppDispatch()

  const requests = useAppSelector(requestsSelector)

  React.useEffect(() => {
    dispatch(getRequestsThunk())
  },[dispatch])

  return (
    <Box marginTop={20}>
        <Container>
            <Typography variant='h5' fontWeight={500} marginBottom={4}>
                Yêu cầu mượn
            </Typography>
            <TableRequest requests={requests}/>
        </Container>
    </Box>
  )
}

export default RequestPage