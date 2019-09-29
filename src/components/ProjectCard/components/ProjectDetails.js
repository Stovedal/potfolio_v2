import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { HeadingSmall, Heading, Row } from '../../../style/components'
import { Skill } from '../../SkillRow'
import ProjectSlider from '../../../components/ProjectSlider'

export default class ProjectDetails extends Component {

	render() {
		console.log(this.props.project);

		return (
			<Container>
				<Heading onClick={() => this.props.close()} style={{ background: this.props.project.color }}><Back>{"<"}</Back>{this.props.project.title}</Heading>
				<Content>
					x					<DetailsContainer>

						<HeadingSmall style={{ background: this.props.project.color }}>
							Objective
			</HeadingSmall>
						<Text>
							{this.props.project.thumbText}
						</Text>
						<HeadingSmall style={{ background: this.props.project.color }}>
							Technologies
			</HeadingSmall >
						{this.props.project.skillImages.map((image, index) => <Skill key={index} image={image} />)}
						<HeadingSmall style={{ background: this.props.project.color }}>
							Outcome
			</HeadingSmall>
						<Text>{this.props.project.approach}</Text>
						<Text>{this.props.project.challenges}</Text>
						<Text>{this.props.project.solution}</Text>
						<Text>{this.props.project.outcome}</Text>
					</DetailsContainer>
					<SliderContainer>
						<ProjectSlider images={this.props.project.images} />
					</SliderContainer>
				</Content>
			</Container>
		)
	}


}

const Back = styled.div`
	display: inline;
	margin-right: 1rem;
`

const Content = styled(Row)` 
	margin: 1rem;
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
	height:100%;
	width: 100%;
	max-width: 100vw;
	background: white;
	margin: 2rem;
	padding:1rem;
	animation: ${anim} 0.5s 0s;
`

const Text = styled.p` 
	margin:1rem 1rem;
	@media only screen and (max-width: 600px){
		text-align: center;
	}
`
const SliderContainer = styled.div`
	max-width: 35rem;
	max-height: 35rem;
	align-items: center;
	justify-content: center;
	margin:1rem;
`

const DetailsContainer = styled.div`
	margin:1rem;

`