import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'
import { Column } from '../../style/components'

class ProjectSlider extends Component {
	render() {
		return (
			<Column>
				<Container>
					<Carousel
						renderCenterLeftControls={({ previousSlide }) => (
							<Chevron onClick={previousSlide}>{"<"}</Chevron>
						)}
						renderCenterRightControls={({ nextSlide }) => (
							<Chevron onClick={nextSlide}>></Chevron>
						)}
					>
						{this.props.images.map((image, index) =>
							<ImageCard key={index} image={image} />
						)}
					</Carousel>
				</Container>
			</Column>
		)
	}
}

const ImageCard = (props) => {
	return (
		<Card>
			<Label>{props.image.title}</Label>
			<ImageContainer>
			<Img sizes={props.image.sizes} />

			</ImageContainer>
			<Description>
				LOLOLOLO
				{props.image.description}
			</Description>
		</Card>
	)
}

const ImageContainer = styled.div`
	height:10rem;
	width: 10rem;
`

const Description = styled.div`
	color: #000;
	width: 300px;
	height: 300px;

	z-index: 1;
`

const Chevron = styled.button`
	height: 2rem;
	width: 2rem;
	border-radius: 1rem;
	margin: 0.5rem;
	color: white;
	background: black;
	border:none;
	opacity: 0.38;
	outline: none;
	:hover{
		opacity: 0.54;
	}
`

const Label = styled.p`
	background: black;
	opacity: 0.87;
	color: white;
	position: absolute;
	z-index: 1;
	bottom:1rem;
	left: 1rem;
	padding: 0.5rem 1rem;
`

const Card = styled.div`
	height: 50vw;
	width: 50vw;
	min-width: 30rem;
	min-height: 30rem;
	overflow: hidden;
	@media only screen and (max-width: 600px){
		width: 100vw;
		height: 100vw
	}
`
const Container = styled(Card)`
	margin:1rem;

`

export default ProjectSlider