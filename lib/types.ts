export interface LocationData {
  id: string
  title: string
  description: string
  lat: number
  lng: number
  category: string
  images: string[]
  details?: {
    title: string
    content: string
  }[]
}
