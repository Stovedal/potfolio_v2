import React, { Component } from 'react'
import styled from 'styled-components'
import { Page, HeaderWhite } from '../../../style/components'
import Img from 'gatsby-image'

class TopPage extends Component {
	render() {
		const person = this.props.person
		return (
			<Page id="top" style={{ overflow: "hidden" }}>
				<ImageContainer>
					<Img style={{ width: "100vw", height: "100vh", minWidth: "60rem" }} sizes={person.image.sizes} />
					<Description>
						<Other>This is me,</Other>
						<HeaderWhite>Sofia Tovedal</HeaderWhite>
						<Other> a student of <Emphazied>Interaction Technology</Emphazied> and <Emphazied>Computer Science</Emphazied>, with a <i>very</i> cute japanese dog.</Other>
					</Description>
				</ImageContainer>
			</Page>
		)
	}
}

const Other = styled.p`
	font-family: "Hiragino Sans";
	color:  rgba(255,255,255,0.87);
	font-weight: 200;
	font-size: 1rem;
	margin:0rem;
`

const Description = styled.div`
	position:absolute;
	bottom: 1rem;
	left: 1rem;
	display:flex;
	flex-direction:column;
	align-items: flex-start;
	max-width: 90vw;
	padding:1rem;
	background: linear-gradient(to top right, rgba(0,0,0,0.54), transparent);
`

const Emphazied = styled(Other)`
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