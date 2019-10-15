import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'
import { Column } from '../../style/components'

class ImageSlider extends Component {
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
	border-radius: 4px;

	left: 1rem;
	padding: 0.5rem 1rem;
`

const Card = styled.div`
	width: 30rem;
	height: 30rem;
	border-radius: 4px;
	overflow: hidden;
	@media only screen and (max-width: 600px){
		width: 100vw;
		height: 100vw
	}
`
const Container = styled(Card)`
	margin:1rem;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

`

export default ImageSlider