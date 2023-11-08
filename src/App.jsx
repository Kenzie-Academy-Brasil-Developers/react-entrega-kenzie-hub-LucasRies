import { useContext } from 'react'
import Routes from './routes'
import styles from './styles/index.scss'
import { UserContext } from './providers/UserContext'
import { Loading } from './components/Loading'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { loading } = useContext(UserContext)

  return (
    <>
      {loading ? <Loading /> : <Routes />}
      <ToastContainer position="top-right" autoClose={1 * 1000} theme="dark" />
    </>
  )
}

export default App
