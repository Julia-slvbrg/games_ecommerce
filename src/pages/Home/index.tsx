import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetSoonQuery, useGetOnSaleQuery } from '../../services/api'

export const Home = () => {
  const { data: SoonGames, isLoading: isLoadingSale } = useGetSoonQuery()
  const { data: onSaleGames, isLoading: isLoadingSoon } = useGetOnSaleQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        $background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={SoonGames}
        title="Em breve"
        $background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
