import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'
import { TopBar } from '../../style/components'

export default () => (
  <TopBar>
    <p className={styles.title}>Sofia Tovedal</p>
    <nav role="navigation">
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/projects/">projects</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/about/">about me</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/contact/">get in touch</Link>
        </li>
      </ul>
    </nav>
  </TopBar>
)
