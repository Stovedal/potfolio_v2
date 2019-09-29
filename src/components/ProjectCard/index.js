import React, { Component } from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled, { keyframes } from 'styled-components'
import { Row, PrimaryDiv, Elevation, fadeIn } from '../../style/components'
import Label from './components/Label'
import ProjectDetails from './components/ProjectDetails'


export default class ProjectCard extends Component {

	render() {
		const { thumbImage } = this.props.project
		const onDisplay = this.props.display === this.props.index
		const hidden = this.props.display !== null && !onDisplay

		if(onDisplay) {
			return ( <ProjectDetails close={() => this.props.onDisplay()} project={this.props.project}/> )
		}
		return (
			<Main onDisplay={onDisplay} hidden={hidden}>
				<Background sizes={thumbImage.sizes}>
					<Container>
						<Label
							onClick={() => this.props.onDisplay()}
							project={this.props.project}
							display={onDisplay}
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

const Main = styled.div`
	height: ${props => props.onDisplay ? "100%" : "40vh"};
	width: ${props => props.onDisplay ? "100%" : "40vh"};
	transition: all 0.25s ease-out;
	margin:1rem;
	padding:0rem;
	display:  ${props => props.hidden ? "none" : "flex"};
	@media only screen and (max-width: 600px){
		width: 90vw;
		height: 90vw;
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
