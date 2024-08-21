import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyle } from './styles'
import RoutesComponent from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <RoutesComponent />
    </BrowserRouter>
  )
}

export default App
