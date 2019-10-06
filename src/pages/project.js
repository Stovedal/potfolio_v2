import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import Layout from '../components/layout'
import { Page, HeadingSmall, Heading, Row } from '../style/components'
import ProjectSlider from '../components/ProjectSlider'
import { Skill } from '../components/SkillRow'

export default class Project extends Component {

	goBack() {
		this.props.navigate("/#projects")
	}

	render() {
		const { project } = this.props.location.state
		console.log(this.props);

		return (
			<Layout noNavigation={true}>
				<Container>
					<Heading style={{ background: project.color, margin: "0rem", fontSize: "2rem" }}><Back onClick={() => this.goBack()}>{"<"}</Back>{project.title}</Heading>
					<Content>
						<DetailsContainer>

							<HeadingSmall >
								Objective
			</HeadingSmall>
							<Text>
								{project.thumbText}
							</Text>
							<HeadingSmall >
								Technologies
			</HeadingSmall >
							<Margin>
								{project.skillImages.map((image, index) => <Skill key={index} image={image} />)}
							</Margin>
							<HeadingSmall >
								Outcome
			</HeadingSmall>
							<Text>{project.approach}</Text>
							<Text>{project.challenges}</Text>
							<Text>{project.solution}</Text>
							<Text>{project.outcome}</Text>
							<BackText onClick={() => this.goBack()} style={{color: project.color}}>{"<<< back to projects"}</BackText>
						</DetailsContainer>
						<SliderContainer>
							<ProjectSlider images={project.images} />
						</SliderContainer>
					</Content>
				</Container>
			</Layout>
		)
	}


}

const BackText = styled.p`
	padding:1rem;
	margin: 0rem;
	user-select: none;
	:hover{
		cursor: pointer;
	}
`

const Margin = styled.div`
	margin-left: 1rem;
`

const Back = styled.div`
	display: inline;
	padding: 1rem;
	margin-right: 1rem;
	opacity: 0.87;
	user-select: none;
	:hover {
		cursor: pointer;
		opacity:1;
	}
`

const Content = styled(Row)` 
	margin-top: 1rem;
	align-items: flex-start;
	flex-direction: row;
	@media only screen and (max-width: 600px){
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
	}
`



export const anim = keyframes`
  	from 
  	{
		opacity: 0;
	}
	to 
	{
		opacity: 1;
	}
`;

const Container = styled.div`
	animation: ${anim} 0.5s 0s;
	display: flex;
	flex-direction: column;
	flex:1;
`

const Text = styled.p` 
	padding:0.5rem 1rem;
	max-width: 95vw;

`
const SliderContainer = styled.div`
	max-width: 35rem;
	max-height: 35rem;
	width: 40%;
	height: 40%;
	align-items: center;
	justify-content: center;
	margin:1rem;
`

const DetailsContainer = styled.div`
	margin:1rem;
	overflow: scroll;

`