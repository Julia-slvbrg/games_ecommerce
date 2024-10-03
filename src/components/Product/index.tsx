import Tag from '../Tag'
import { Card, Description, Info, Title } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  info: string[]
  image: string
  id: number
}

export const Product = ({
  title,
  category,
  system,
  description,
  info,
  image,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Info>
        {info.map((element, index) => (
          <Tag key={index}>{element}</Tag>
        ))}
      </Info>
      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{getDescription(description)}</Description>
    </Card>
  )
}

export default Product
