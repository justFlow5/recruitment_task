export interface ReviewShape {
  id: string
  comment: string
  rating: number
}

export interface Props {
  reviews: ReviewShape[]
  last: number
}
