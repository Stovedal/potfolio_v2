import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'
import { Column, HeadingSmall } from '../../style/components'

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
			<Img sizes={props.image.sizes} />
		</Card>
	)
}

const Chevron = styled.button`
	height: 2rem;
	width: 2rem;
	border-radius: 1rem;
	margin: 0.5rem;
	color: white;
	background: #DC395F;
	border:none;
	opacity: 0.38;
	outline: none;
	:hover{
		opacity: 0.54;
	}
`

const Label = styled(HeadingSmall)`
	position: absolute;
	z-index: 1;
	bottom:1rem;
	padding: 0rem 2rem;
`

const Card = styled.div`
	height: 100%;
	width: 100%;
	max-width: 90vw;
	max-height: 90vh;
	overflow: hidden;
	@media only screen and (max-width: 600px){
		width: 100vw;
		height: 100vw
	}
`
const Container = styled(Card)`
	margin:1rem;
	height: 100%;
	width: 100%;
	max-width: 90vw;
	max-height: 90vh;
`

export default ProjectSlider