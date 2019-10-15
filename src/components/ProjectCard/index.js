import React, { Component } from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled, { keyframes } from 'styled-components'
import { Row, PrimaryDiv, Elevation, fadeIn } from '../../style/components'
import Label from './components/Label'
import Link from 'gatsby-link'


export default class ProjectCard extends Component {

	constructor(props) {
		super(props)
		this.state = {
			expandLabel: false
		}
	}

	render() {
		const { thumbImage } = this.props.project
		return (
			<Link to="/project/" state={{ project: this.props.project }}>
				<Main
					onMouseOver={() => this.setState({ expandLabel: true })}
					onMouseLeave={() => this.setState({ expandLabel: false })}>
					<Background sizes={thumbImage.sizes}>
						<Container>
							<Label
								project={this.props.project}
								expand={this.state.expandLabel}
							/>
						</Container>
					</Background>
				</Main>
			</Link>
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
	min-width: 300px;
	border-radius: 0.5rem;
	min-height: 300px;
	background: white;
	height: 40vh;
	width: 40vh;
	transition: all 0.25s ease-out;
	margin:1rem;
	padding:0rem;
	display: flex;
	@media only screen and (max-width: 600px){
		width: 90vw;
		height: 90vw;
	}
	
`


const Background = styled(BackgroundImage)`
	margin: 0rem;
	padding: 0rem;
	border-radius: 0.5rem;
	height: 100%;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	width: 100%;
	overflow: hidden;
	animation: ${fadeIn} 0.5s 0s;
	min-width: 300px;
	min-height: 300px;

	:hover {
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	}
	transition: all 0.5s cubic-bezier(.25,.8,.25,1);
	@media only screen and (max-width: 600px){
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	}
			`
