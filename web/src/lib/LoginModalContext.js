import React, { useState, createContext } from 'react'

export const LoginModalContext = createContext()

export const LoginModalProvider = ({ children }) => {
  const [displayLoginModal, setDisplayLoginModal] = useState('CLOSED')
  return (
    <LoginModalContext.Provider
      value={[displayLoginModal, setDisplayLoginModal]}
    >
      {children}
    </LoginModalContext.Provider>
  )
}
