import React from 'react'
import Navigation from '../navigation'
import styles from './index.css'
import { SiteBackground } from '../../style/components'

const Layout = ({ children }) => {
  return (
    <SiteBackground>
      <Navigation />
      {children}
    </SiteBackground>
  )
}

export default Layout
