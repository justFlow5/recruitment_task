import React from 'react'
import LocationBox from 'components/LocationBox'
import { LocationBoxContextProvider } from 'contexts/LocationBoxContext'

const LocationBoxContainer: React.FC = ({ id }) => (
  <LocationBoxContextProvider>
    <LocationBox id={id} />
  </LocationBoxContextProvider>
)

export default LocationBoxContainer
