

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
	margin: 0rem;
	padding: 0rem;
	background: ${colors.background};
	font-family:  "Hiragino Sans", "Avenir", Tahoma, Arial, Helvetica, sans-serif;
	font-size: 1em;
	line-height: 1.65;
	scroll-snap-type: mandatory;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	overflow: scroll;
	height: 100vh;
	
	@font-face {
	font-family: "Avenir";
	font-style: normal;
	src: url("/avenir-400.woff2") format("woff2");
	font-display: swap;}
	@media only screen and (max-width: 600px) {
		scroll-snap-type: none;
		scroll-snap-type: y none;
	}

`

export const PrimaryDiv = styled.div`
	color: ${colors.primaryText};
	background: ${colors.primaryBackground};
	padding: 1rem;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	overflow: hidden;
	opacity: 0.87;
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


export const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	flex:1;
	min-height: 100vh;
	width: 100vw;
	scroll-snap-align: start;
	position: relative;
	overflow: hidden;
	@media only screen and (max-width: 600px) {
		justify-content: center;
	}
`

export const Header = styled.p`
	font-size: 4rem;
	font-family: "Hiragino Sans";
	font-weight: bolder;
	color: black;
	opacity: 0.87;
	margin: 0rem;
	margin-left: 1rem;
	padding: 0rem;
	@media only screen and (max-width: 600px) {
		font-size: 3rem;
	}
`

export const HeaderWhite = styled(Header)`
	color: white;
`

export const SubHeader = styled(Header)`
	margin: 0rem;
	margin-left: 1rem;
	margin-bottom: 1rem;
	margin-top: 2rem;
	font-size: 1rem;
	font-weight: 800;
	padding:0rem;
	@media only screen and (max-width: 600px) {
		text-align: left;
		font-size: 1rem;
	}
`
