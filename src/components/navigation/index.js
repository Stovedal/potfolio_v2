import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'
import styled from 'styled-components'
import { colors } from '../../style/colors'

export default () => (
  <Container>
    <Hamburger>
      <HamburgerBar/>
      <HamburgerBar/>
      <HamburgerBar/>
    </Hamburger>
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
  </Container>

)
const Container = styled.div`
  position: sticky;
  right: 1rem;
  top:1rem;
  z-index:1;

` 
const Hamburger = styled.div`
  height: 3rem;
  align-self: flex-end;
  width: 3rem;
  margin: 1rem;
  border-radius: 1.5rem;
  background: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.87;
  display: none;
  @media only screen and (max-width: 600px){
    display: flex;
  }
`

const HamburgerBar = styled.div`
  background:black;
  width: 1.5rem;
  height: 0.1rem;
  margin: 0.1rem;

`

export const TopBar = styled.div`
	display:flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0rem;
	background: transparent;
  @media only screen and (max-width: 600px){
    display: none;
  }
`

export const NavButton = styled.div`
	padding: 0.5rem 1.5rem;
	text-decoration: none;
	background: ${colors.primaryBackground};
	color: ${colors.primaryText};
	opacity:0.87;
	:hover {
		opacity: 1;
	}
	transition: 0.1s ease-in;
`
