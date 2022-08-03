import React, { useContext, useEffect } from 'react'
import Location from 'components/Location'
import ReviewForm from 'components/ReviewForm'
import { useLazyQuery } from '@apollo/client'
import { GET_LOCATION, ApiShape } from 'api'
import { LocationBoxContext } from 'contexts/LocationBoxContext'
import useLastLocationsId from 'hooks/useLocationsId'
import service from './service'
import './LocationBox.scss'

const LocationBox: React.FC = () => {
  const { lastLocationId, getLocationsIdLoading } = useLastLocationsId()
  const { location, setLocation, shouldReload, setShouldReload } = useContext(LocationBoxContext)

  const [getLocation, { loading: getLocationLoading }] = useLazyQuery<
    ApiShape.GetLocationData,
    ApiShape.GetLocationInput
  >(GET_LOCATION)

  useEffect(() => {
    if (lastLocationId && shouldReload) {
      service.fetchLocation({ lastLocationId, getLocation, setLocation, setShouldReload })
    }
  }, [lastLocationId, shouldReload])

  return (
    <div className='LocationBox'>
      {getLocationsIdLoading && 'Loading locations ID...'}
      {getLocationLoading && 'Loading last location...'}

      {!getLocationsIdLoading && !getLocationLoading && location && (
        <>
          {Location(location)}
          {<ReviewForm />}
        </>
      )}
    </div>
  )
}

export default LocationBox
