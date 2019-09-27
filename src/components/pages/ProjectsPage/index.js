import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Column, Title, Page } from '../../../style/components'
import ProjectCard from '../../ProjectCard'

class ProjectsPage extends Component {

	constructor(props) {
		super(props)
		this.state = { display: null }
	}

	render(){
		const projects = this.props.projects
		return (
			<Page id="projects">
				<Title>
						Some of my projects
					</Title>
					<Projects>
						{projects.map((project, index) =>
							<ProjectCard
								display={this.state.display}
								onDisplay={() => this.setState({ display: (index === this.state.display) ? null : index })}
								key={index}
								index={index}
								project={project.node}
							/>)}
					</Projects>
			</Page>
		)
	}
}

const Projects = styled.div`
	display: flex;
	flex:1;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 600px){
		flex-direction: column;
		flex-wrap: nowrap;
	}
`


export default ProjectsPage