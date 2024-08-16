import { BtnContainer, BtnLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

export const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <BtnContainer type="button" title={title}  onClick={onClick}>{children}</BtnContainer>
    )
  }

  return(
    <BtnLink to={to as string} title={title}>{children}</BtnLink>
  )
}

export default Button
