import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyle } from './styles'
import RoutesComponent from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <RoutesComponent />
      <Footer />
    </BrowserRouter>
  )
}

export default App
