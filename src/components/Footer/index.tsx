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
              <Link>RPG</Link>
              <Link>Ação</Link>
              <Link>Aventura</Link>
              <Link>Esportes</Link>
              <Link>Simulação</Link>
              <Link>Estratégia</Link>
              <Link>FPS</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <TitleSection>Acesso rápido</TitleSection>
          <Links>
            <li>
              <Link>Novidades</Link>
              <Link>Promoções</Link>
              <Link>Em breve</Link>
            </li>
          </Links>
        </FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  )
}

export default Footer
