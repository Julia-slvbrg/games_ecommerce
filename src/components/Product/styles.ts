import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.gray};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin: 16px 0 8px;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
export const Info = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
