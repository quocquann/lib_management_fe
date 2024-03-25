import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import TableRequest from '../../components/TableRequest/TableRequest'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { getRequestsThunk } from '../../services/states/action'
import { requestsSeletor } from '../../services/states/selector'

const RequestPage:React.FC = () => {

  const dispatch = useAppDispatch()

  const requests = useAppSelector(requestsSeletor)

  React.useEffect(() => {
    dispatch(getRequestsThunk())
  },[dispatch])

  return (
    <Box marginTop={20}>
        <Container>
            <Typography>
                Reqeust
            </Typography>
            <TableRequest requests={requests}/>
        </Container>
    </Box>
  )
}

export default RequestPage