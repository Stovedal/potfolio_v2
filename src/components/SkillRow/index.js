import React, { Component } from 'react'
import { Column, Row } from '../../style/components'
import Img from 'gatsby-image'
import styled from 'styled-components'

const SkillRow = (props) => {
	return (
		<Column style={{alignItems: "flex-start"}}>
			<Title>{props.title}</Title>
			{props.images.map((image, index) =>
				<Container>
					<ImageContainer>
						<Img sizes={image.sizes} />
					</ImageContainer>
					<Name>{image.title}</Name>
				</Container>
			)}
		</Column>
	)
}

const Container = styled(Row)`
	
`

const Name = styled.p`
	margin:0;
`

const ImageContainer = styled.div`
	height: 1rem;
	width: 1rem;
	margin: 1rem;
	filter: grayscale(100%);
`

const Title = styled.p`
	color: #000;
	opacity: 0.54;
	font-weight: bold;
`

export default SkillRow