import React, { Component } from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled, { keyframes } from 'styled-components'
import { Row, PrimaryDiv, Elevation, fadeIn } from '../../style/components'
import Label from './components/Label'
import ProjectDisplay from './components/ProjectDisplay'


export default class ProjectCard extends Component {

	render() {
		const { thumbImage } = this.props.project
		const display = this.props.display === this.props.index
		const hide = this.props.display !== null && !display
		return (
			<Main
				displayed={display}
				height={hide ? "0px" : display ? "86vh" : "30vw"}
				width={hide ? "0px" : display ? "100vw" : "30vw"}
				opacity={hide ? "0" : "1"}>

				<Background sizes={thumbImage.sizes}>
					<Container>
						<Info display={display ? "flex" : "none"}>
							{(display) ? <ProjectDisplay project={this.props.project}/> : null}
						</Info>
						<Label
							onClick={() => this.props.onDisplay()}
							project={this.props.project}
							display={display}
						/>
					</Container>
				</Background>
			</Main>
		)
	}
}


const Container = styled.div`
			padding: 0rem;
			display:flex;
			height: 100%;
			width: 100%;
			align-items: flex-start;

		`


const Info = styled.div`
	display: ${props => props.display};
			height: 100%;
			width: 100%;
			opacity: 1;
			background: white;
			flex-direction: row;
			justify-content: space-between;
			`

const Main = styled.div`
	transform:${props => props.transform};
	height: ${props => props.height};
	width: ${props => props.width};
	opacity: ${props => props.opacity};
	transition: all 0.25s ease-out;
	margin:1rem;
	padding:0rem;
	display: flex;
	@media only screen and (max-width: 600px){
		width: 90vw;
		height: ${props=> props.displayed ? "95vh" : "90vw"};
	}
	
`


const Background = styled(BackgroundImage)`
	margin: 0rem;
	padding: 0rem;
	border-radius: 0.2rem;
	height: 100%;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	width: 100%;
	overflow: hidden;
	animation: ${fadeIn} 0.5s 0s;
	min-width: 300px;
	min-height: 300px;

			`
