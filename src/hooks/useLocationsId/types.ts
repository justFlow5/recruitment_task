import { Location } from 'components/Location'

export interface UseLocationsIdProps {
  lastLocationId: Location['id'] | undefined
  getLocationsIdLoading: boolean
}
