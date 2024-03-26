import React from 'react'
import ReviewItem from '../ReviewItem/ReviewItem'
import { IReview } from '../../models/interface'

interface IReviewListProps {
  reviews: IReview[]
}

const ReviewList:React.FC<IReviewListProps> = (props) => {

  const { reviews } = props

  return (
    <>
        {reviews.map(review => (
          <ReviewItem key={review.id} review={review}/>
        ))}
    </>
  )
}

export default ReviewList