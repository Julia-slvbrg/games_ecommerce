import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderBar, Links, LinkItem, CartBtn } from './styles'
import { open } from '../../store/reducers/cart'
import logo from '../../assets/images/logo.svg'
import shoppingCart from '../../assets/images/shopping-cart.svg'
import { RootReducer } from '../../store'

export const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartBtn onClick={() => openCart()}>
        {items.length} - produtos(s)
        <img src={shoppingCart} alt="Carrinho" />
      </CartBtn>
    </HeaderBar>
  )
}

export default Header
