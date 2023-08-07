import React, { createContext, useState } from 'react'
import { Loader } from '../components/Loader'

export const PreloaderContext = createContext()

export function PreloaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <PreloaderContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <Loader />}
      {children}
    </PreloaderContext.Provider>
  )
}
