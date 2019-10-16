import React, { Component } from 'react'
import styles from './index.module.css'
import styled, {keyframes} from 'styled-components'
import { colors } from '../../style/colors'

export default class Navigation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hamburgerOpen: false,
      hamburgerHover: false,
    }
  }

  render() {
    const toggleHamburger = () => this.setState({ hamburgerOpen: !this.state.hamburgerOpen })

    return (
      <Container>
        <HamburgerMenu open={this.state.hamburgerOpen}>
          <a style={{ textDecoration: "none" }} href="#projects">
            <HamburgerButton onClick={toggleHamburger} className={styles.navigationItem}>
              work
            </HamburgerButton>
          </a>
          <a style={{ textDecoration: "none" }} href="#about">
            <HamburgerButton onClick={toggleHamburger} className={styles.navigationItem}>
              about
            </HamburgerButton>
          </a>
          <a style={{ textDecoration: "none" }} href="#contact">
            <HamburgerButton onClick={toggleHamburger} className={styles.navigationItem}>
              contact
            </HamburgerButton>
          </a>
        </HamburgerMenu>
        <Hamburger onClick={toggleHamburger} onMouseEnter={() => this.setState({})}>
          <HamburgerBar open={this.state.hamburgerOpen || this.state.hamburgerHover} />
          <HamburgerBar />
          <HamburgerBar />
        </Hamburger>

        <TopBar>
          <nav role="navigation">
            <ul className={styles.navigation}>
              <a style={{ textDecoration: "none" }} href="#projects">
                <NavButton className={styles.navigationItem}>
                  work
            </NavButton>
              </a>
              <a style={{ textDecoration: "none" }} href="#about">
                <NavButton className={styles.navigationItem}>
                  about
            </NavButton>
              </a>
              <a style={{ textDecoration: "none" }} href="#contact">
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

const HamburgerBar = styled.div`
  height: 0.3rem;
  width: 1.5rem;
  margin: 0.1rem;
  background: white;
  opacity: 0.87;
  border-radius: 0.2rem;
`

const HamburgerMenu = styled.div`
  display: none;
  background: rgba(255,159,28,1);
  @media only screen and (max-width: 1000px){
    display: ${props => props.open ? "flex" : "none"};
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem;
    transition: 0.1s ease-in;
    box-shadow: 0 1px 3px rgba(255,159,28,0.12), 0 1px 2px rgba(255,159,28,0.24);
  }
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
  background: rgba(255,159,28,1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  display: none;
  @media only screen and (max-width: 1000px){
    display: flex;
    box-shadow: none;
  }
  box-shadow: 0 1px 3px rgba(255,159,28,0.12), 0 1px 2px rgba(255,159,28,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  :hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(255,159,28,0.25), 0 10px 10px rgba(255,159,28,0.22);
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
  @media only screen and (max-width: 1000px){
    display: none;
  }
`

export const NavButton = styled.div`
	padding: 0.5rem 1.5rem;
	text-decoration: none;
  background: #FF9F1C;
	color: white;
  font-weight: 400;
  border-radius: 1.5rem;
  box-shadow: 0 2px 2px 0 rgba(255,159,28,0.14), 0 3px 1px -2px rgba(255,159,28,0.12), 0 1px 5px 0 rgba(255,159,28,0.20);
	:hover {
    box-shadow: 0 8px 10px 1px rgba(255,159,28,0.14), 0 3px 14px 2px rgba(255,159,28,0.12), 0 5px 5px -3px rgba(255,159,28,0.20);
	}
	transition: 0.1s ease-in;
`

const fadeIn = keyframes`
  from {
					opacity: 0;
			  }
  to {
					transform: 1;
			  }
			`;

export const HamburgerButton = styled.div`
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  margin: 0.5rem;
  width: 6rem;
  background: white;
  color: black;
  opacity:0.87;
  padding: 0.5rem 1rem;
  border-radius:2rem;
  font-weight: 400;
  text-decoration: none;
  animation: width 0.5s ease-in;
	:hover {
		font-size: 1.2;
  }
  animation: 1s ease-out 0s 1 fadeIn;
`
