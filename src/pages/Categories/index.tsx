import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightingGamesQuery,
  useGetRPGGamesQuery,
  useGetSimmulatorGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

export const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightingGames } = useGetFightingGamesQuery()
  const { data: RPGGames } = useGetRPGGamesQuery()
  const { data: simulatorGames } = useGetSimmulatorGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()

  if (
    RPGGames &&
    actionGames &&
    sportsGames &&
    fightingGames &&
    simulatorGames
  ) {
    return (
      <>
        <ProductsList games={RPGGames} title="RPG" $background="black" />
        <ProductsList games={actionGames} title="Ação" $background="gray" />
        <ProductsList
          games={sportsGames}
          title="Aventura"
          $background="black"
        />
        <ProductsList games={fightingGames} title="Luta" $background="gray" />
        <ProductsList
          games={simulatorGames}
          title="Simulação"
          $background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
