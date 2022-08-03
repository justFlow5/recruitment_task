import { Dispatch, ReactNode, SetStateAction } from 'react'
import { Location } from 'components/Location'

export interface LocationBoxContextProviderProps {
  children: ReactNode
}

type SetShouldReloadType = (id: string) => void

export interface LocationBoxContextProps {
  location?: Location
  setLocation: Dispatch<SetStateAction<Location | undefined>>
  shouldReload: boolean
  setShouldReload: SetShouldReloadType
}

export const locationBoxContextDefault: LocationBoxContextProps = {
  location: undefined,
  setLocation: () => void {},
  shouldReload: false,
  setShouldReload: () => void {}
}
