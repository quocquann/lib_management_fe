import { Box, Rating, Typography } from '@mui/material'
import {styled} from '@mui/material/styles'
import React from 'react'

const TopBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4
}) as typeof Box

const ReviewItem: React.FC = () => {
  return (
    <Box padding={1}>
        <TopBox>
            <Typography variant='h6' fontSize={14}>
                Quoc Quan
            </Typography>
            <Rating size='small' readOnly/>
        </TopBox>
        <Box>
            <Typography variant='body2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, rerum! Architecto mollitia dolorem consequatur quibusdam.
            </Typography>
        </Box>
    </Box>
  )
}

export default ReviewItem