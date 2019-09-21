import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ProjectCard from '../components/ProjectCard'
import Layout from '../components/layout'
import styled from 'styled-components'

class ProjectsPage extends React.Component {


	constructor(props) {
		super(props)
		this.state = {display: null}
	}

	render() {
		const projects = get(this, 'props.data.allContentfulProject.edges')
		return (
			<Layout>
				<Helmet title={"Projects"} />
				<Wrapper>
					{projects.map((project, index) =>
						<ProjectCard 
							display={this.state.display}
							onDisplay={() => this.setState({ display: (index === this.state.display) ? null : index })} 
							key={index}
							index={index}
							project={project.node}
							/>)}
				</Wrapper>
			</Layout>
		)
	}
}

export default ProjectsPage


const Wrapper = styled.div`
	display: flex;
	flex:1;
	height: 100vh;
	flex-wrap: wrap;
`

export const pageQuery = graphql`
  query Projects {
	allContentfulProject {
	  edges {
		node {
		  id
		  title
		  thumbText
		  thumbImage {
            sizes( resizingBehavior: FILL) {
			  ...GatsbyContentfulSizes_withWebp
			}
		  }
		  skillImages {
            sizes(resizingBehavior: FILL) {
			  ...GatsbyContentfulSizes_withWebp
			}
		  }
		  approach
		  approachImage {
            sizes(resizingBehavior: FILL) {
			  ...GatsbyContentfulSizes_withWebp
			}
		  }
		  challenges
		  challengesImage {
            sizes(resizingBehavior: FILL) {
			  ...GatsbyContentfulSizes_withWebp
			}
		  }
		  solution
		  solutionImage {
            sizes(resizingBehavior: FILL) {
			  ...GatsbyContentfulSizes_withWebp
			}
		  }
		  outcome
		  outcomeImage {
            sizes(resizingBehavior: FILL) {
			  ...GatsbyContentfulSizes_withWebp
			}
		  }
		}
	  }
	}
  }
`
