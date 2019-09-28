import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import styled from 'styled-components'
import { Text, Row, Column, Page } from '../style/components'
import pages from '../components/pages'

class MainPage extends React.Component {

	render() {
		console.log(this.props.data);
		
		const projects = get(this, 'props.data.allContentfulProject.edges')
		const person = this.props.data.contentfulPerson
		const skills = this.props.data.contentfulSkills
		console.log("no", this.props.data.contentfulSkills);

		return (
			<Layout>
				<Helmet title={""} />
				<pages.TopPage person={person}/>
				<pages.ProjectsPage projects={projects}/>
				<pages.AboutPage person={person} skills={skills}/>
			</Layout>
		)
	}
}

export default MainPage


export const pageQuery = graphql`
  query Projects {

	contentfulSkills {
		frameworks {
			sizes(resizingBehavior: FILL) {
				...GatsbyContentfulSizes_withWebp
				}
				title
				description
		}
		languages {
			sizes(resizingBehavior: FILL) {
				...GatsbyContentfulSizes_withWebp
				}
				title
				description
		}
		design {
			sizes(resizingBehavior: FILL) {
				...GatsbyContentfulSizes_withWebp
				}
				title
				description
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
			title
			description
		  }
		  challenges
		  challengesImage {
            sizes(resizingBehavior: FILL) {
			  ...GatsbyContentfulSizes_withWebp
			}
			title
			description
		  }
		  solution
		  solutionImage {
            sizes(resizingBehavior: FILL) {
			  ...GatsbyContentfulSizes_withWebp
			}
			title
			description
		  }
		  outcome
		  outcomeImage {
            sizes(resizingBehavior: FILL) {
			  ...GatsbyContentfulSizes_withWebp
			}
			title
			description
		  }
		}
	  }
	}
  }

`
