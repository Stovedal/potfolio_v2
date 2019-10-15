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
		const { location } = this.props
		console.log(location, this.props);

		if(location.state == null) {
			return (<Layout noNavigation={true}/>)

		}
		
		return (
			<Layout noNavigation={true}>
				<Container>
					<MainHeader style={{ background: location.state.project.color}}><Back onClick={() => this.goBack()}>{"<"}</Back>{location.state.project.title}</MainHeader>
					<Content>
						<DetailsContainer>

							<HeadingSmall >
								Objective
			</HeadingSmall>
							<Text>
								{location.state.project.thumbText}
							</Text>
							<HeadingSmall >
								Technologies
			</HeadingSmall >
							<Margin>
								{location.state.project.skillImages.map((image, index) => <Skill key={index} image={image} />)}
							</Margin>
							<HeadingSmall >
								Outcome
			</HeadingSmall>
							<Text>{location.state.project.approach}</Text>
							<Text>{location.state.project.challenges}</Text>
							<Text>{location.state.project.solution}</Text>
							<Text>{location.state.project.outcome}</Text>
							<BackText onClick={() => this.goBack()} style={{color: location.state.project.color}}>{"<<< back to projects"}</BackText>
						</DetailsContainer>
						<SliderContainer>
							<ProjectSlider images={location.state.project.images} />
						</SliderContainer>
					</Content>
				</Container>
			</Layout>
		)
	}


}

const MainHeader = styled(Heading)`
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	margin:0rem;
	font-size: 2rem;
	opacity:1;
	border-radius: 0px;
`

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