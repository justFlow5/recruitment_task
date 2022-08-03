import { Location } from 'components/Location'

export interface GetLocationsIdData {
  locations: Pick<Location, 'id'>[]
}

export interface GetLocationData {
  location: Location
}

export interface GetLocationInput {
  id: Location['id']
}
