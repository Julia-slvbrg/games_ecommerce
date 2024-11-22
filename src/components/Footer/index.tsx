import { Container, FooterSection, Links, Link, TitleSection } from './styles'

const currentYear = new Date().getFullYear()

export const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <TitleSection>Categoria</TitleSection>
          <Links>
            <li>
              <Link to="/categories#rpg">RPG</Link>
              <Link to="/categories#action">Ação</Link>
              <Link to="/categories#sports">Esportes</Link>
              <Link to="/categories#simulator">Simulação</Link>
              <Link to="/categories#fighting">Luta</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <TitleSection>Acesso rápido</TitleSection>
          <Links>
            <li>
              <Link to="/#on-sale">Promoções</Link>
              <Link to="/#coming-soon">Em breve</Link>
            </li>
          </Links>
        </FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  )
}

export default Footer
