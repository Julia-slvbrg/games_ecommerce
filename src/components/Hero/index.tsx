import heroImg from '../../assets/images/hero_hogwarts.svg'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Info } from './styles'

const Hero = () => {
  return (
    <Banner style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <Info>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 250,00</span>
            Por R$ 190,00
          </p>
          <Button
            type="button"
            title="Clique aqui para adicionar esse jogo ao carrinho"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        </Info>
      </div>
    </Banner>
  )
}

export default Hero
