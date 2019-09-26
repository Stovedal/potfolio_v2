import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Row, PrimaryDiv, Elevation, fadeIn } from '../../style/components'
import styles from './index.module.css'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

export const section = { process: "Process", challenges: "Challenges", outcome: "Outcome" };

export default class ProjectDisplay extends Component {

	constructor(props) {
		super(props)
		this.state = {
			section: section.process
		}
	}

	render() {
		const { title } = this.props.project
		console.log(this.props);

		return (

			<Body>
								<Content>
					<Menu>
						<MenuItem active={this.state.section == section.process} onClick={() => this.setState({ section: section.process })}>{section.process}</MenuItem>
						<MenuItem active={this.state.section == section.challenges} onClick={() => this.setState({ section: section.challenges })}>{section.challenges}</MenuItem>
						<MenuItem active={this.state.section == section.outcome} onClick={() => this.setState({ section: section.outcome })}>{section.outcome}</MenuItem>
					</Menu>
					{this.getContent()}
				</Content>
				<Background sizes={this.getImage()}/>
			</Body>
		)
	}

	getContent() {
		switch (this.state.section) {
			case section.process:
				return this.props.project.approach
			case section.challenges:
				return this.props.project.challenges
			case section.solution:
				return this.props.project.solution
			case section.outcome:
				return this.props.project.outcome
		}
	}

	getImage() {
		switch (this.state.section) {
			case section.process:
				return this.props.project.thumbImage.sizes
			case section.challenges:
				return this.props.project.challengesImage.sizes
			case section.solution:
				return this.props.project.solutionImage.sizes
			case section.outcome:
				return this.props.project.outcomeImage.sizes
		}
	}
}



const Background = styled(BackgroundImage)`
	height: 100%;
	width: 60%;
	animation: ${fadeIn} 0.5s 0s;
`

const ImageContainer = styled.div`
	height: 50vh;
	padding: 0rem 4rem;
`

const Body = styled.div`
	display: flex;
	flex:1;
	margin:1rem;
	align-items: space-between;
	justify-content: space-between;
`


const Content = styled.div`
	align-items: flex-start;
	justify-content: flex-start;
	margin: 1rem;
	font-size: 1rem;
	max-width: 50%;
`

const Title = styled(Content)`
	font-size: 2rem;
`

const Menu = styled.div`
	display:flex;
`

const MenuItem = styled.div`
	margin: 1rem 2rem;
	opacity: ${props => props.active ? 1 : 0.87};
	text-decoration: ${props => props.active ? "underline" : "none"};
	:hover {
		cursor: pointer;
		opacity: 1;
		text-decoration: underline;
			}
		transition: all 0.5s cubic-bezier(.25,.8,.25,1);
		
		`
