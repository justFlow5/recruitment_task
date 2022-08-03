import React from 'react'
import { Props } from './types'
import Reviews from 'components/Reviews'
import './Location.scss'

const Location = ({ id, name, description, photo, overallRating, reviewsForLocation }: Props) => {
  return (
    <section className='Location'>
      <figure>
        <figcaption className='Location__title'>
          {name} (Id: {id}, rating: {Number(overallRating).toFixed(2)})
        </figcaption>

        <img
          className='Location__photo'
          alt={name}
          src={photo}
        />

        <p>{description}</p>
      </figure>

      <div className='Location__reviews'>
        <Reviews
          reviews={reviewsForLocation}
          last={3}
        />
      </div>
    </section>
  )
}

export default Location
