import { useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_LOCATIONS_ID, ApiShape } from 'api'

const useLocationsId = () => {
  const [lastLocationId, setLastLocationId] = useState<string>()

  const [getLocationsId, { loading: getLocationsIdLoading }] =
    useLazyQuery<ApiShape.GetLocationsIdData>(GET_LOCATIONS_ID)

  useEffect(() => {
    getLocationsId().then(({ data }) => {
      if (data) {
        const ids = data?.locations?.map(location => location.id)

        if (ids?.length > 0) {
          setLastLocationId(ids.at(-1))
        }
      }
    })
  }, [getLocationsId])

  return { lastLocationId, getLocationsIdLoading } as const
}

export default useLocationsId
