import Game from '../../models/Games'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  $background: 'gray' | 'black'
  games: Game[]
}

export const ProductsList = ({ title, $background, games }: Props) => {
  return (
    <Container $background={$background} >
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.category}
              description={game.description}
              image={game.image}
              info={game.info}
              title={game.title}
              system={game.system}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
