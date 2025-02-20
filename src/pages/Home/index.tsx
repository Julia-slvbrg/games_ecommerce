import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetSoonQuery, useGetOnSaleQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

export const Home = () => {
  const { data: SoonGames } = useGetSoonQuery()
  const { data: onSaleGames } = useGetOnSaleQuery()

  if (SoonGames && onSaleGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          title="Promoções"
          $background="gray"
          id="on-sale"
        />
        <ProductsList
          games={SoonGames}
          title="Em breve"
          $background="black"
          id="coming-soon"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
