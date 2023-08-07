import { PreloaderProvider } from './contexts/loaderContext'
import { Home } from './pages/Home'

function App() {
  return (
    <PreloaderProvider>
      <Home />
    </PreloaderProvider>
  )
}

export default App
