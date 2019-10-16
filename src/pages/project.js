import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import Layout from '../components/layout'
import { Row, Header, SubHeader } from '../style/components'
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
					<Content>
						<DetailsContainer>
							<SubHeader >
								Objective
			</SubHeader>
							<Text>
								{location.state.project.thumbText}
							</Text>
							<SubHeader >
								Technologies
			</SubHeader >
							<Margin>
								{location.state.project.skillImages.map((image, index) => <Skill key={index} image={image} />)}
							</Margin>
							<SubHeader >
								Outcome
			</SubHeader>
							<Text>{location.state.project.approach}</Text>
							<Text>{location.state.project.challenges}</Text>
							<Text>{location.state.project.solution}</Text>
							<Text>{location.state.project.outcome}</Text>
							<BackText onClick={() => this.goBack()} style={{color: location.state.project.color}}>{"<<< back to projects"}</BackText>
						</DetailsContainer>
						<SliderContainer>
						<Header style={{ color: location.state.project.color}}>{location.state.project.title}</Header>

							<ProjectSlider color={location.state.project.color} images={location.state.project.images} />
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


const Content = styled(Row)` 
	align-items: flex-start;
	flex-direction: row-reverse;
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
	font-weight: 200;


`
const SliderContainer = styled.div`
	width: 50vw;
	height: 50vw;
	width: 40%;
	height: 40%;
	align-items: center;
	justify-content: center;
	padding: 3rem;
	@media only screen and (max-width: 600px){
		width: 100vw;
		padding: 1rem;
	}
`

const DetailsContainer = styled.div`
	width: 50vw;
	margin:1rem;
	overflow: scroll;
	@media only screen and (max-width: 600px){
		width: 100vw;
	}
`