import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'
import { TopBar, NavButton } from '../../style/components'

export default () => (
  <TopBar>
    <nav role="navigation">
      <ul className={styles.navigation}>
        <a style={{textDecoration: "none"}} href="#projects">
          <NavButton className={styles.navigationItem}>
            projects
        </NavButton>
        </a>
        <a style={{textDecoration: "none"}} href="#about">
          <NavButton className={styles.navigationItem}>
            about
        </NavButton>
        </a>
        <a style={{textDecoration: "none"}} href="#top">
          <NavButton className={styles.navigationItem}>
            contact
        </NavButton>
        </a>
      </ul>
    </nav>
  </TopBar >
)
