import React from 'react'
import { Props } from './types'
import Review from './Review'

export const Reviews = ({ reviews, last }: Props) => (
  <div>
    <h2 className='Review__title'>Reviews:</h2>

    {reviews?.length > 0 ? (
      <ul>
        {reviews?.slice(-last)?.map(reviewData => (
          <li key={reviewData.id}>
            <Review {...reviewData} />
          </li>
        ))}
      </ul>
    ) : (
      <p>No review yet</p>
    )}
  </div>
)
