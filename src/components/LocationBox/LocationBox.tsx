import React from 'react'
import Location from 'components/Location'
import ReviewForm from 'components/ReviewForm'
import { useQuery } from '@apollo/client'
import { GET_LOCATION, ApiShape } from 'api'
import useLastLocationsId from 'hooks/useLocationsId'
import './LocationBox.scss'

const LocationBox = () => {
  const { lastLocationId, getLocationsIdLoading } = useLastLocationsId()

  const { loading: getLocationLoading, data } = useQuery<
    ApiShape.GetLocationData,
    ApiShape.GetLocationInput
  >(GET_LOCATION, {
    skip: !lastLocationId,
    variables: { id: lastLocationId as string },
  })

  return (
    <div className='LocationBox'>
      {getLocationsIdLoading && getLocationLoading && 'Loading...'}

      {!getLocationsIdLoading && !getLocationLoading && data?.location && (
        <>
          <Location {...data?.location} />
          <ReviewForm />
        </>
      )}
    </div>
  )
}

export default LocationBox
