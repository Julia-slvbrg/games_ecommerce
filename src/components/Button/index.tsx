import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  $variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  disabled,
  $variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.BtnContainer
        type={type}
        title={title}
        onClick={onClick}
        $variant={$variant}
        disabled={disabled}
      >
        {children}
      </S.BtnContainer>
    )
  }

  return (
    <S.BtnLink to={to as string} title={title}>
      {children}
    </S.BtnLink>
  )
}

export default Button
