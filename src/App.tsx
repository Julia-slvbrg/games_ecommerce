import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalStyle } from './styles'
import Product from './components/Product'
import ProductsList from './components/ProductsList'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title='Promoções' background='gray' />
        <ProductsList title='Em breve' background='black' />
        <ProductsList title='RPG' background='gray' />
        <ProductsList title='Ação' background='black' />
        <ProductsList title='Aventura' background='gray' />
        <ProductsList title='FPS' background='black' />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
