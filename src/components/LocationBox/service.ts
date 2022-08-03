import { Dispatch, SetStateAction } from 'react'
import { LazyQueryExecFunction } from '@apollo/client'
import { ApiShape } from 'api'
import { Location } from 'components/Location'

export default class LocationBoxService {
  static fetchLocation = ({
    lastLocationId,
    getLocation,
    setLocation,
    setShouldReload
  }: {
    lastLocationId: string
    getLocation: LazyQueryExecFunction<ApiShape.GetLocationData, ApiShape.GetLocationInput>
    setLocation: Dispatch<SetStateAction<Location | undefined>>
    setShouldReload: Dispatch<SetStateAction<boolean>>
  }) =>
    void getLocation({ variables: { id: lastLocationId } }).then(res => {
      const { data } = res

      if (data) {
        const { location } = data

        setLocation(location)
        setShouldReload(false)
      }
    })
}
