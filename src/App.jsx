import { useContext } from 'react'
import Routes from './routes'
import styles from './styles/index.scss'
import { UserContext } from './providers/UserContext'
import { Loading } from './components/Loading'

function App() {
  const { loading } = useContext(UserContext)

  return (
    <>    
      {loading? <Loading/> : <Routes />}
    </>
  )
}

export default App
