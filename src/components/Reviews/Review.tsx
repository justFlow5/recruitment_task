import React from 'react'
import { ReviewShape } from './types'
import './Review.scss'

const Review = ({ id, comment, rating }: ReviewShape) => (
  <article className='Review'>
    <p className='Review__comment'>{comment}</p>

    <p>
      ({id}, rating: {rating})
    </p>
  </article>
)

export default Review
