import Tag from '../Tag'
import { Card, Description, Info, Title } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  info: string[]
  image: string
}

export const Product = ({
  title,
  category,
  system,
  description,
  info,
  image
}: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <Info>
        {info.map((element, index) => (
          <Tag key={index}>{element}</Tag>
        ))}
      </Info>
      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{description}</Description>
    </Card>
  )
}

export default Product
