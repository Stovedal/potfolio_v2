

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
	font-family: "Avenir", Tahoma, Arial, Helvetica, sans-serif;
	font-size: 1em;
	line-height: 1.65;
	color: #373F49;
	scroll-snap-type: proximity;
	scroll-snap-type: y proximity;
	scroll-behavior: smooth;
	overflow: scroll;
	height: 100vh;
	
	@font-face {
	font-family: "Avenir";
	font-weight: 400;
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
	align-items: center;
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

export const Heading = styled.p`
	font-size: 1rem;
	border-radius: 4px;
	padding: 0.5rem 1.5rem;
	margin:1rem;
	max-width: 100vw;
	color: white;
	background-color: rgba(0,0,0,0.87);
	font-weight: lighter;
	
	@media only screen and (max-width: 600px) {
		text-align: flex-start;
	}
`
export const HeadingSmall = styled(Heading)`
	display: inline-block;
	padding: 0rem 1rem;
	font-size: 0.85;
	
`
