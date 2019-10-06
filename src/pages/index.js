import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pages from '../components/pages'

export default class MainPage extends Component {

	render() {		
		const projects = this.props.data.contentfulProjects.projects
		const person = this.props.data.contentfulPerson
		const skills = this.props.data.contentfulSkills
		const channels = this.props.data.contentfulContact.channels
		console.log(this.props.data);
		
		return (
			<Layout>
				<Helmet title={"home"} />
				<pages.TopPage person={person}/>
				<pages.ProjectsPage projects={projects}/>
				<pages.AboutPage person={person} skills={skills}/>
				<pages.ContactPage channels={channels} />
			</Layout>
		)
	}
}

export const pageQuery = graphql`
  query Projects {

	contentfulContact {
		channels {
			sizes(resizingBehavior: FILL) {
				...GatsbyContentfulSizes_withWebp
				}
				title
				description
		}
	}

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

	contentfulProjects {
		projects {
			id
		  title
		  color
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
			title
			description
		  }
		  approach
		  challenges
		  solution
		  outcome
		  images {
            sizes(resizingBehavior: FILL) {
			  ...GatsbyContentfulSizes_withWebp
			}
			title
			description
		  }
		}
	}

	allContentfulProject {
	  edges {
		node {
		  id
		  title
		  color
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
			title
			description
		  }
		  approach
		  challenges
		  solution
		  outcome
		  images {
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
