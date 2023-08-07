import { useContext } from 'react'
import { PreloaderContext } from '../contexts/loaderContext'

export function usePreloader() {
  const { setIsLoading } = useContext(PreloaderContext)

  function openPreloader() {
    setIsLoading(true)
  }

  function closePreloader() {
    setIsLoading(false)
  }

  return {
    openPreloader,
    closePreloader
  }
}
