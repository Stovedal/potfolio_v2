

import styled, { keyframes } from 'styled-components'
import colors from './colors'

export const Text = styled.p`
			margin:0;
			font-weight: lighter;
			padding: 0.5rem;
			color: ${colors.primaryText};
			max-width: 40rem;
		`

export const Row = styled.div`
	display: flex;
	align-items: center;
`

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Linear = styled.div`
	background: rgb(34,193,195);
	background: linear-gradient(210deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
`

export const SiteBackground = styled.div `
	max-width: 100%;
	margin: 0;
	padding: 0;
	background: ${colors.background};
	min-width: 800px;

`

export const PrimaryDiv = styled.div`
	color: ${colors.primaryText};
	background: ${colors.primaryBackground};
	padding: 1rem;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	overflow: hidden;
	opacity: 0.87;
`

export const TopBar = styled.div`
	display:flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0rem;
	background: transparent;
	position:sticky;
	width:100%;
	top:1rem;
	z-index:1;
`

export const NavButton = styled.div`
	padding: 0.5rem 1.5rem;
	text-decoration: none;
	background: white;
	opacity:0.87;
	:hover {
		opacity: 1;
	}
	transition: 0.1s ease-in;
`

export const Elevation = styled.div`
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	padding: 0rem;
	margin: 0.5rem;
`
export const fadeIn = keyframes`
  from {
					opacity: 0;
			  }
  to {
					transform: 1;
			  }
			`;