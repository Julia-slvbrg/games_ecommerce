import * as S from './styles'

const currentYear = new Date().getFullYear()

export const Footer = () => {
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.TitleSection>Categoria</S.TitleSection>
          <S.Links>
            <li>
              <S.Link
                title="Cliqe aqui para acessar jogos de RPG"
                to="/categories#rpg"
              >
                RPG
              </S.Link>
              <S.Link
                title="Cliqe aqui para acessar jogos de Ação"
                to="/categories#action"
              >
                Ação
              </S.Link>
              <S.Link
                title="Cliqe aqui para acessar jogos de Esportes"
                to="/categories#sports"
              >
                Esportes
              </S.Link>
              <S.Link
                title="Cliqe aqui para acessar jogos de Simulação"
                to="/categories#simulator"
              >
                Simulação
              </S.Link>
              <S.Link
                title="Cliqe aqui para acessar jogos de Luta"
                to="/categories#fighting"
              >
                Luta
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.TitleSection>Acesso rápido</S.TitleSection>
          <S.Links>
            <li>
              <S.Link
                title="Cliqe aqui para acessar a seção de promação "
                to="/#on-sale"
              >
                Promoções
              </S.Link>
              <S.Link
                title="Cliqe aqui para acessar a seção de em breve"
                to="/#coming-soon"
              >
                Em breve
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </S.Container>
  )
}

export default Footer
