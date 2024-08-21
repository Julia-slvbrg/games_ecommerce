import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

export const ProductsList = ({ title, background }: Props) => {
  return (
    <Container background={background} >
      <div className="container">
        <h2>{title}</h2>
        <List>
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            info={['-10%', 'R$150']}
            title="Nome do Jogo"
            system="Windows"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            info={['-10%', 'R$150']}
            title="Nome do Jogo"
            system="Windows"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            info={['-10%', 'R$150']}
            title="Nome do Jogo"
            system="Windows"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            info={['-10%', 'R$150']}
            title="Nome do Jogo"
            system="Windows"
          />
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
