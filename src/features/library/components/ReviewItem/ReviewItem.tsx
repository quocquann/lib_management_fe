import { Box, Rating, Typography } from '@mui/material'
import {styled} from '@mui/material/styles'
import React from 'react'
import { IReview } from '../../models/interface'

const TopBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4
}) as typeof Box

const WrapBox = styled(Box)({
    borderBottom: '1px solid #ccc',
    marginBottom: 10
}) as typeof Box

interface IReviewItemProps {
    review: IReview
}

const ReviewItem: React.FC<IReviewItemProps> = (props) => {

  const { review } = props

  return (
    <WrapBox padding={1}>
        <TopBox>
            <Typography variant='h6' fontSize={14}>
                {review.user}
            </Typography>
            <Rating size='small' readOnly value={review.rating}/>
        </TopBox>
        <Box>
            <Typography variant='body2'>
                {review.comment_text}
            </Typography>
        </Box>
    </WrapBox>
  )
}

export default ReviewItem