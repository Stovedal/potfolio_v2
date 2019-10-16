import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'
import { Column } from '../../style/components'

class ImageSlider extends Component {

	constructor(props) {
		super(props)
		this.carousel = React.createRef()
	}

	render() {		
		return (
			<Column>
				<Container>
					<Carousel
						ref={(c) => this.carousel = c}
						renderCenterLeftControls={({ previousSlide }) => {
							let currentSlide = (this.carousel.state) ? this.carousel.state.currentSlide : 0
							return <Chevron onClick={(currentSlide === 0) ? () => this.carousel.goToSlide(this.props.images.length - 1) : previousSlide}>{"<"}</Chevron>
						}}
						renderCenterRightControls={({ nextSlide }) => {
							let currentSlide = (this.carousel.state) ? this.carousel.state.currentSlide : 0
							return <Chevron onClick={(currentSlide === this.props.images.length - 1) ? () => this.carousel.goToSlide(0) : nextSlide}>></Chevron>
						}}>
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
	background: #FF9F1C;
	border:none;
	opacity: 0.87;
	outline: none;
	:hover{
		opacity: 1;
	}
`

const Label = styled.p`
	color:black;
	background: white;
	position: absolute;
	z-index: 1;
	bottom:1rem;
	border-radius: 4px;
	left: 1rem;
	padding: 0.5rem 1rem;
	font-weight: 200;
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