import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { Form } from './types'
import { GET_LOCATION, SEND_REVIEW } from 'api'

import './ReviewForm.scss'

export const formDefault: Form = {
  id: 'loc-5',
  comment: '',
  rating: '',
}

const ReviewForm = () => {
  const [review, setReview] = useState<Form>(formDefault)
  const [isError, setIsError] = useState(false)

  const [sendReview, { loading: sendReviewLoading }] = useMutation(SEND_REVIEW, {
    refetchQueries: [{ query: GET_LOCATION, variables: { id: review.id } }],
    onCompleted: () => setReview({ ...formDefault, id: review.id }),
  })

  const isValidReview = (review: Form) => {
    const { id, comment, rating } = review
    return comment && id && rating
  }

  const setValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setReview({ ...review, [event.currentTarget.id]: event.currentTarget.value })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isValidReview(review)) {
      setIsError(true)
      return
    }

    const { id, comment, rating } = review
    sendReview({ variables: { id, comment, rating: parseInt(rating, 10) } })
  }

  useEffect(() => {
    if (isValidReview(review)) {
      setIsError(false)
    }
  }, [review])

  return (
    <div className='ReviewForm'>
      <h1 className='ReviewForm__title'>Your review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='id'>Id: </label>
          <input
            id='id'
            value={review.id}
            onChange={setValue}
          />
        </div>

        <div>
          <label htmlFor='rating'>Rating: </label>
          <input
            id='rating'
            value={review.rating}
            onChange={setValue}
          />
        </div>

        <div>
          <label htmlFor='comment'>Comment: </label>
          <input
            id='comment'
            value={review.comment}
            onChange={setValue}
          />
        </div>

        {sendReviewLoading ? 'Sending...' : <button type='submit'>Send</button>}
        {isError && <p className='ReviewForm__error'>All fields are required</p>}
      </form>
    </div>
  )
}

export default ReviewForm
