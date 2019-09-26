import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ProjectCard from '../components/ProjectCard'
import ImageSlider from '../components/ImageSlider'
import SkillRow from '../components/SkillRow'
import Layout from '../components/layout'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Text, Row, Column } from '../style/components'

class ProjectsPage extends React.Component {


	constructor(props) {
		super(props)
		this.state = { display: null }
	}

	render() {
		const projects = get(this, 'props.data.allContentfulProject.edges')
		const person = this.props.data.contentfulPerson
		const skills = this.props.data.contentfulSkills
		console.log("no", this.props.data.contentfulSkills);

		return (
			<Layout>
				<Helmet title={"Projects"} />
				<Wrapper id="top">
					<ImageContainer>
						<Img sizes={person.image.sizes} style={{ minWidth: "1000px" }} />
						<Description>
							<Title>This is me,</Title>
							<Large>Sofia Tovedal</Large>
							<Title> a student of <Emphazied>Interaction Technology</Emphazied> and <Emphazied>Computer Science</Emphazied>, with a <i>very</i> cute japanese dog.</Title>
						</Description>
					</ImageContainer>
				</Wrapper>
				<Wrapper id="projects">
					<Heading>
						These are some of my projects
					</Heading>
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
				</Wrapper>
				<Wrapper id="about">
					<Heading>
						A little more about me
					</Heading>
					<AboutContent>
						<ImageSlider images={person.images} />
						<div>
							<AboutText dangerouslySetInnerHTML={{ __html: person.shortBio.childMarkdownRemark.html }} />
							<Row style={{justifyContent: "space-between", alignItems:"flex-start"}}>
							<SkillRow title={"Languages"} images={skills.languages}/>
							<SkillRow title={"Frameworks"} images={skills.frameworks}/>
							<SkillRow title={"Design"} images={skills.design}/>

							</Row>

						</div>
					</AboutContent>
				</Wrapper>
			</Layout>
		)
	}
}

export default ProjectsPage

const AboutContent = styled(Row)`
	height:100%;
	align-items: flex-start;
`

const AboutText = styled(Text)`
	color: black;
	margin: 1rem;
`

const Projects = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`

const Heading = styled(Text)`
	color: white;
	font-size: 1rem;
	opacity: 0.87;
	padding: 0.5rem 1.5rem;
	background: black;
	font-weight: lighter;
	text-align: left;
	margin: 1rem;
`

const Description = styled.div`
	position:absolute;
	bottom: 1rem;
	left: 1rem;
	display:flex;
	flex-direction:column;
	align-items: flex-start;
`

const Title = styled.p`
	color: white;
	font-size: 1rem;
	opacity: 0.87;
	padding: 0.5rem 1.5rem;
	background: black;
	font-weight: lighter;
`

const Large = styled(Title)` 
	font-size: 3rem;
	margin: 0rem;
	display: inline;
	display: flex;
	flex-direction:column;
`

const Emphazied = styled.p`
	font-size: 1.5rem;
	display: inline;
	padding:0.25rem;
`

const ImageContainer = styled.div`
	height: 100%;
	width:100%;
	overflow: hidden;
`


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex:1;
	height: 100vh;
	width: 100vw;
	scroll-snap-align: start;
`

export const pageQuery = graphql`
  query Projects {

	contentfulSkills {
		frameworks {
			sizes(resizingBehavior: FILL) {
				...GatsbyContentfulSizes_withWebp
				}
				title
		}
		languages {
			sizes(resizingBehavior: FILL) {
				...GatsbyContentfulSizes_withWebp
				}
				title
		}
		design {
			sizes(resizingBehavior: FILL) {
				...GatsbyContentfulSizes_withWebp
				}
				title
		}
	}

	contentfulPerson {
		email
		github
		id
		name
		phone
		shortBio {
		childMarkdownRemark {
			html
		}
		}
		image {
			sizes(resizingBehavior: FILL) {
			...GatsbyContentfulSizes_withWebp
			}
		}
		images {
			sizes(resizingBehavior: FILL) {
			...GatsbyContentfulSizes_withWebp
			}
			title
		}
	}


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
