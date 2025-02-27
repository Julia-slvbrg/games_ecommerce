import Product from '../Product'

import Loader from '../Loaders'
import { parseToBrl } from '../../utils'

import * as S from './styles'

export type Props = {
  title: string
  $background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

export const ProductsList = ({
  title,
  $background,
  games,
  id,
  isLoading
}: Props) => {
  const getGameTag = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container id={id} $background={$background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  category={game.details.category}
                  description={game.description}
                  image={game.media.thumbnail}
                  info={getGameTag(game)}
                  title={game.name}
                  system={game.details.system}
                />
              </li>
            ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
