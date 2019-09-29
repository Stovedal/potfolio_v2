import React, { Component } from 'react'
import { Column, Row } from '../../style/components'
import Img from 'gatsby-image'
import styled from 'styled-components'

const SkillRow = (props) => {
	return (
		<Column style={{alignItems: "flex-start", width: "10rem"}}>
			<Title>{props.title}</Title>
			{props.images.map((image, index) => <Skill key={index} image={image}/>
			)}
		</Column>
	)
}

export const Skill = (props) => {
	return (
		<Link href={props.image.description} target={"_blank"}>
		<Row>
			<ImageContainer>
				<Img sizes={props.image.sizes} />
			</ImageContainer>
			<Name>{props.image.title}</Name>
		</Row>
		</Link>
	)
}

const Link = styled.a` 
	text-decoration: none;
	filter: grayscale(100%);
	:hover {
		filter: none;
		cursor: pointer;
	}
	transition: all 0.2s ease;
`

const Name = styled.p`
	margin:0;
	text-decoration: none;
`

const ImageContainer = styled.div`
	height: 1rem;
	width: 1rem;
	margin: 0.5rem;
	transition: all 0.3s ease;
`

const Title = styled.p`
	color: #000;
	opacity: 0.54;
	font-weight: bold;
	margin: 0.5rem;
`

export default SkillRow