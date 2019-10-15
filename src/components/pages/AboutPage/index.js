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
					<AboutHeading>
						A little more about me
					</AboutHeading>
					<AboutContainer>
					<AboutContent>
						<ImageSlider images={person.images} />
						<div>
							<AboutHeading>Who am I</AboutHeading>
							<AboutText>I'm Sofia Tovedal from the deep mid-north, I've studied interaction technology and Computer Science for more than 4 years now and I love it. During this time I've tried my hand at arranging all kinds of events as well as jumping in the deep end of the pool as a freelancing developer.</AboutText>
							<AboutHeading >Technological skills</AboutHeading>
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

const AboutHeading = styled(Heading)`
	@media only screen and (max-width: 600px){
		border-radius: 0px;
	}
`

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
	width: 100%;
	height: 100%;
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