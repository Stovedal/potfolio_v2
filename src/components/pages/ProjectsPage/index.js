import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Column, Header, Page } from '../../../style/components'
import ProjectCard from '../../ProjectCard'

class ProjectsPage extends Component {

	constructor(props) {
		super(props)
		this.state = { display: null }
	}

	render() {

		const projects = this.props.projects
		return (
			<Page id="projects">
				<RowContainer>
					<Container>
						<Header>Work</Header>
						<SubHeader>These are a few of the projects I've done when I haven't been studying.</SubHeader>
					</Container>
					<Projects>
						{projects.map((project, index) =>
							<ProjectCard
								display={this.state.display}
								onDisplay={() => this.setState({ display: (index === this.state.display) ? null : index })}
								key={index}
								index={index}
								project={project}
							/>)}
					</Projects>
				</RowContainer>
			</Page>
		)
	}
}

const RowContainer = styled(Row)`
	align-items: flex-start; 
	justify-content: space-between; 
	width: 100%;
	@media only screen and (max-width: 600px){
		flex-direction: column;
		flex-wrap: nowrap;
		padding: 0rem;
	}
`

const SubHeader = styled.p`
	color: black;
	max-width: 400px;
	margin:3rem;
	opacity: 0.87;
	font-weight: 200;
	@media only screen and (max-width: 600px){
		margin-top:1rem;
	}
`

const Container = styled.div`
	height: 100vh;
	padding:1rem;
	@media only screen and (max-width: 600px){
		padding: 0rem;
		display: block;
		height: 40%;
	}
` 
const Projects = styled.div`
	display: flex;
	flex:1;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	align-self: center;
	max-width: 800px;
	@media only screen and (max-width: 600px){
		flex-direction: column;
		flex-wrap: nowrap;
		padding: 0rem;
	}
`


export default ProjectsPage