import React, { Component } from 'react'
import styled from 'styled-components'
import { Text, Row, PrimaryDiv } from '../../../style/components'
import Img from 'gatsby-image'

class Label extends Component {

	render() {
		const { title, skillImages, thumbText } = this.props.project
		return (
			<Container 
			style={{background: this.props.project.color}}
			>
				<Head>
					<Title>{title}</Title>
					<Row>{skillImages.map((image, index) => <SkillIcon key={index}><Img sizes={image.sizes} /></SkillIcon>)}</Row>
				</Head>
				<Content open={this.props.expand}>
					<Description>
						{thumbText}
					</Description>
				</Content>
			</Container>
		)
	}
}

// Components

const Title = styled.p`
	color: white;
`
const Description = styled.p`
	margin:1.5rem;
	margin-top: 0rem;
	color: white;

`

const Container = styled(PrimaryDiv)`
	display: flex;
	flex:1;
	flex-direction: column;
	padding: 0rem;
	position: absolute;
	bottom: 20px;
	right: 0px;
	left: 0px;
	transition: all 0.5s cubic-bezier(.25,.8,.25,1);
	opacity: 1;

`

const Content = styled.div`
	display: flex;
	flex:1;
	flex-direction: column;
	padding: 0rem;
	max-height: ${props => props.open ? "15rem" : "0rem"};
	bottom: 20px;
	right: 0px;
	left: 0px;
	transition: all 0.5s cubic-bezier(.25,.8,.25,1);
`


const SkillIcon = styled.div`
			margin: 0.5rem;
			height: 1.5rem;
			width: 1.5rem;
			filter: brightness(0) invert(1);
		`

const Head = styled(Row)`
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0.5rem 0.5rem 0.5rem 1.5rem;
				height: 2rem;
			`

export default Label