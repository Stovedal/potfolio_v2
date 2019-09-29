import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Heading, Text, Page } from '../../../style/components'
import ImageSlider from '../../ImageSlider'
import SkillRow from '../../SkillRow'

class AboutPage extends Component {
	render(){
		const person = this.props.person
		const skills = this.props.skills
		return (
			<Page id="about">
					<Heading>
						A little more about me
					</Heading>
					<AboutContainer>
					<AboutContent>
						<ImageSlider images={person.images} />
						<div>
							<Heading>Who am I</Heading>
							<AboutText dangerouslySetInnerHTML={{ __html: person.shortBio.childMarkdownRemark.html }} />
							<Heading >Technological skills</Heading>
							<SkillsContainer>
							<SkillRow title={"Languages"} images={skills.languages}/>
							<SkillRow title={"Frameworks"} images={skills.frameworks}/>
							<SkillRow title={"Design"} images={skills.design}/>
							</SkillsContainer>
						</div>
					</AboutContent>
					</AboutContainer>
			</Page>
		)
	}
}


const SkillsContainer = styled.div`
	display: flex;
	justify-content: flex-start; 
	align-items: flex-start;
 	margin-left: 2rem;
	@media only screen and (max-width: 600px){
		flex-wrap: wrap;
	}

`

const AboutContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 90vh;
	width: 100%;
`

const AboutContent = styled(Row)`
	@media only screen and (max-width: 600px){
		flex-direction: column;
	}
`

const AboutText = styled(Text)`
	color: black;
	margin-left: 1rem;
`


export default AboutPage