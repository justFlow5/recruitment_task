import { useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_LOCATIONS_ID, ApiShape } from 'api'
import { UseLocationsIdProps } from './types'

const useLocationsId = (): UseLocationsIdProps => {
  const [locationsId, setLocationsId] = useState<string[]>([])
  const [lastLocationId, setLastLocationId] = useState<string>()

  const [getLocationsId, { loading: getLocationsIdLoading }] = useLazyQuery<
    ApiShape.GetLocationsIdData
  >(GET_LOCATIONS_ID)

  useEffect(() => {
    getLocationsId().then(res => {
      const { data } = res

      if (data) {
        const ids: string[] = data.locations.map(e => e).map((l): string => l.id)
        setLocationsId(ids)
      }
    })
  }) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (locationsId.length > 0) {
      setLastLocationId(locationsId[locationsId.length - 1])
    }
  }, [locationsId])

  return { lastLocationId, getLocationsIdLoading }
}

export default useLocationsId
