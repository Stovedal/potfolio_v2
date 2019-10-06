import React from 'react'
import Navigation from '../navigation'
import styles from './index.css'
import { SiteBackground } from '../../style/components'

const Layout = ({ children, noNavigation }) => {
  return (
    <SiteBackground>
      {(!noNavigation) ? <Navigation /> : null}
      {children}
    </SiteBackground>
  )
}

export default Layout
