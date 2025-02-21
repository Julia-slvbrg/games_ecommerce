import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightingGamesQuery,
  useGetRPGGamesQuery,
  useGetSimmulatorGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

export const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightingGames, isLoading: isLoadingFight } =
    useGetFightingGamesQuery()
  const { data: RPGGames, isLoading: isLoadingRPG } = useGetRPGGamesQuery()
  const { data: simulatorGames, isLoading: isLoadingSimulator } =
    useGetSimmulatorGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()

  return (
    <>
      <ProductsList
        games={RPGGames}
        title="RPG"
        $background="black"
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductsList
        games={actionGames}
        title="Ação"
        $background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        $background="black"
        id="esportes"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={fightingGames}
        title="Luta"
        $background="gray"
        id="fighting"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={simulatorGames}
        title="Simulação"
        $background="black"
        id="simulator"
        isLoading={isLoadingSimulator}
      />
    </>
  )
}

export default Categories
