import { ReviewShape } from 'components/Reviews'

export interface Location {
  id: string
  name: string
  description: string
  photo: string
  overallRating: string
  reviewsForLocation: ReviewShape[]
}
