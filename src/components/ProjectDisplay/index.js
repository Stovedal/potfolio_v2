import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Row, PrimaryDiv, Elevation, fadeIn } from '../../style/components'
import styles from './index.module.css'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

export const section = { approach: "Approach", challenges: "Challenges", solution: "Solution", outcome: "Outcome" };

export default class ProjectDisplay extends Component {

	constructor(props) {
		super(props)
		this.state = {
			section: section.approach
		}
	}

	render() {
		const { title } = this.props.project
		console.log(this.props);

		return (
			<div>

				<Body>
					
					<Content>
					<Menu>
					<MenuItem active={this.state.section == section.approach} onClick={() => this.setState({ section: section.approach })}>{section.approach}</MenuItem>
					<MenuItem active={this.state.section == section.challenges} onClick={() => this.setState({ section: section.challenges })}>{section.challenges}</MenuItem>
					<MenuItem active={this.state.section == section.solution} onClick={() => this.setState({ section: section.solution })}>{section.solution}</MenuItem>
					<MenuItem active={this.state.section == section.outcome} onClick={() => this.setState({ section: section.outcome })}>{section.outcome}</MenuItem>
				</Menu>
						<Title>{this.state.section}</Title>
						{this.getContent()}
					</Content>
					<ImageContainer>
							<Img style={{ minWidth: "200px"}} sizes={this.getImage()} />
					</ImageContainer>
				</Body>
			</div>
		)
	}

	getContent() {
		switch (this.state.section) {
			case section.approach:
				return this.props.project.approach
			case section.challenges:
				return this.props.project.challenges
			case section.solution:
				return this.props.project.solution
			case section.outcome:
				return this.props.project.outcome
		}
	}

	getImage(){
		switch (this.state.section) {
			case section.approach:
				return this.props.project.approachImage.sizes
			case section.challenges:
				return this.props.project.challengesImage.sizes
			case section.solution:
				return this.props.project.solutionImage.sizes
			case section.outcome:
				return this.props.project.outcomeImage.sizes
		}
	}
}




const ImageContainer = styled.div`
	width: 14vw;
	padding: 0rem 4rem;
`

const Body = styled.div`
	display: flex;
	flex:1;
	margin:1rem;
	align-items: space-between;
	justify-content: space-between;
	width:100%;
	height:100%;
`


const Content = styled.div`
	align-items: center;
	justify-content: center;
	margin: 1rem;
	text-align:center;
	font-size: 1rem;
	max-width: 50rem;
	padding-right: 4rem;
	padding-left: 4rem;
`

const Title = styled(Content)`
	font-size: 2rem;
`

const Menu = styled.div`
	display:flex;
`

const MenuItem = styled.div`
	margin: 1rem 4rem;
	opacity: ${props => props.active ? 1 : 0.87};
	text-decoration: ${props => props.active ? "underline" : "none"};
	:hover {
		cursor: pointer;
		opacity: 1;
		text-decoration: underline;
			}
		transition: all 0.5s cubic-bezier(.25,.8,.25,1);
		
		`
