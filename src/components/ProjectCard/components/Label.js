import React from 'react'
import styled from 'styled-components'
import { Text, Row, PrimaryDiv } from '../../../style/components'
import Img from 'gatsby-image'

const Label = (props) => {
	const { title, skillImages, thumbText } = props.project
	const { display, onClick } = props
	console.log(skillImages);
	
	return (
		<Content onClick={() => onClick()} maxHeight={display ? "none" : "3rem"}>
			<Head>
				<Title>{title}</Title>
				<Row>{skillImages.map((image, index) => <SkillIcon key={index}><Img sizes={image.sizes}/></SkillIcon>)}</Row>
			</Head>
			<Description>
				{thumbText}
			</Description>
		</Content>
	)
}

// Components

const Title = styled(Text)`

`
const Description = styled(Text)`
	margin:1.5rem;
	margin-top: 0rem;
`

const Content = styled(PrimaryDiv)`
	display: flex;
	flex:1;
	flex-direction: column;
	padding: 0rem;
	margin-bottom: 1rem;
	max-height: ${props => props.maxHeight};
	position: absolute;
	bottom: 20px;
	right: 0px;
	left: 0px;
	:hover {
		max-height: 12rem;
		cursor: pointer;
	}
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