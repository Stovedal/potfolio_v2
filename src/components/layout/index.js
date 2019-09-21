import React from 'react'
import Container from './container'
import Navigation from '../navigation'
import styles from './index.css'

const Layout = ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  )
}


export default Layout
