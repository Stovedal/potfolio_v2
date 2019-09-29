import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Column, Text, Page, Heading } from '../../../style/components'
import Img from 'gatsby-image'

class TopPage extends Component {
	render(){
		const person = this.props.person
		return (
			<Page id="top" style={{overflow: "hidden"}}>
					<ImageContainer>
						<Img style={{width: "100vw", minWidth: "90rem"}} sizes={person.image.sizes} />
						<Description>
							<Heading>This is me,</Heading>
							<Large>Sofia Tovedal</Large>
							<Heading> a student of <Emphazied>Interaction Technology</Emphazied> and <Emphazied>Computer Science</Emphazied>, with a <i>very</i> cute japanese dog.</Heading>
						</Description>
					</ImageContainer>
			</Page>
		)
	}
}


const Description = styled.div`
	position:absolute;
	bottom: 1rem;
	left: 1rem;
	display:flex;
	flex-direction:column;
	align-items: flex-start;
	max-width: 90vw;
`

const Large = styled(Heading)` 
	font-size: 3rem;
	margin: 0rem;
	display: inline;
	display: flex;
	flex-direction:column;
`

const Emphazied = styled.p`
	font-size: 1.5rem;
	display: inline;
	padding:0.25rem;
`

const ImageContainer = styled.div`
	height: 100%;
	width: 100vw;
	display: flex;
	min-width: 1000px;
`


export default TopPage