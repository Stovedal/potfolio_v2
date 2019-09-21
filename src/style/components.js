

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
`

export const PrimaryDiv = styled.div`
	color: ${colors.primaryText};
	background: ${colors.primaryBackground};
	padding: 1rem;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	overflow: hidden;
	opacity: 0.87;
`

export const TopBar = styled(PrimaryDiv)`
	display:flex;
	justify-content: space-between;
	align-items: center;
	padding: 0rem;
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