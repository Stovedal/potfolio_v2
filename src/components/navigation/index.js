import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'
import styled from 'styled-components'
import { colors } from '../../style/colors'

export default class Navigation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hamburgerOpen: false,
    }
  }

  render() {
    const toggleHamburger = () => this.setState({ hamburgerOpen: !this.state.hamburgerOpen })
    return (
      <Container>
        <HamburgerMenu open={this.state.hamburgerOpen}>
          <a style={{ textDecoration: "none" }} href="#projects">
            <HamburgerButton onClick={toggleHamburger} className={styles.navigationItem}>
              projects
            </HamburgerButton>
          </a>
          <a style={{ textDecoration: "none" }} href="#about">
            <HamburgerButton onClick={toggleHamburger} className={styles.navigationItem}>
              about
            </HamburgerButton>
          </a>
          <a style={{ textDecoration: "none" }} href="#top">
            <HamburgerButton onClick={toggleHamburger} className={styles.navigationItem}>
              contact
            </HamburgerButton>
          </a>
        </HamburgerMenu>
        <Hamburger onClick={toggleHamburger}>
          <HamburgerImage src={require("./Hamburger.png")}></HamburgerImage>
        </Hamburger>

        <TopBar>
          <nav role="navigation">
            <ul className={styles.navigation}>
              <a style={{ textDecoration: "none" }} href="#projects">
                <NavButton className={styles.navigationItem}>
                  projects
            </NavButton>
              </a>
              <a style={{ textDecoration: "none" }} href="#about">
                <NavButton className={styles.navigationItem}>
                  about
            </NavButton>
              </a>
              <a style={{ textDecoration: "none" }} href="#top">
                <NavButton className={styles.navigationItem}>
                  contact
            </NavButton>
              </a>
            </ul>
          </nav>
        </TopBar >
      </Container>

    )
  }
}



const HamburgerMenu = styled.div`
  display: none;
  background: white;
  @media only screen and (max-width: 600px){
    display: ${props => props.open ? "flex" : "none"};
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem;
    background: white;
    transition: 0.1s ease-in;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
`

const HamburgerImage = styled.img` 
  height: 1.5rem;
  width: 2rem;
`
const Container = styled.div`
  position: sticky;
  top:1rem;
  padding-right: 1rem;
  z-index:1;
  display: flex;
  justify-content: flex-end; 
  height: 0rem;
  overflow: visible;
`
const Hamburger = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 2rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  display: none;
  @media only screen and (max-width: 600px){
    display: flex;
  }
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  :hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  z-index: 2;
`
export const TopBar = styled.div`
  margin:1rem;

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


export const HamburgerButton = styled.div`
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  margin: 0.5rem;
  width: 6rem;
  background: white;
  text-decoration: none;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	:hover {
		font-size: 1.2;
  }

`
