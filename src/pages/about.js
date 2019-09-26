import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from 'styled-components'
import Img from 'gatsby-image'

class AboutPage extends React.Component {
  render() {
	const person = this.props.data.contentfulPerson
	console.log(person)
    return (
      <Layout style={{ background: '#fff' }}>
        <Helmet title={"About me"} />
		<ImageContainer>
			<Img sizes={person.image.sizes}/>
		</ImageContainer>
      </Layout>
    )
  }
}

const ImageContainer = styled.div`
height: 100%;
width: 100%;
`


export const pageQuery = graphql`
	query About {
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
		}
	}
`


export default AboutPage
