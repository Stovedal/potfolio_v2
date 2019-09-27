import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Title, Text, Page } from '../../../style/components'
import ImageSlider from '../../ImageSlider'
import SkillRow from '../../SkillRow'

class AboutPage extends Component {
	render(){
		const person = this.props.person
		const skills = this.props.skills
		return (
			<Page id="about">
					<Title>
						A little more about me
					</Title>
					<AboutContent>
						<ImageSlider images={person.images} />
						<div>
							<Title>About me</Title>
							<AboutText dangerouslySetInnerHTML={{ __html: person.shortBio.childMarkdownRemark.html }} />
							<Title >Technological skills</Title>
							<SkillsContainer>
							<SkillRow title={"Languages"} images={skills.languages}/>
							<SkillRow title={"Frameworks"} images={skills.frameworks}/>
							<SkillRow title={"Design"} images={skills.design}/>
							</SkillsContainer>
						</div>
					</AboutContent>
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

const AboutContent = styled(Row)`
	height:100%;
	align-items: space-around;
	display: flex;
	@media only screen and (max-width: 600px){
		flex-direction: column;
	}
`

const AboutText = styled(Text)`
	color: black;
	margin-left: 1rem;
`


export default AboutPage