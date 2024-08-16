import { Image, Prices, Title } from './styles'
import bannerImg from '../../assets/images/banner.svg'
import Tag from '../Tag'
import Button from '../Button'

export const Banner = () => {
  return (
    <Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>Marvel's Spider-Man: Miles Morales PS4 & PS5</Title>
          <Prices>
            De <span>R$ 250,00</span> <br /> à por apenas R$ 99,90
          </Prices>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
