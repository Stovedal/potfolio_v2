import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Page, HeaderWhite } from '../../../style/components'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

export default class ContactPage extends Component {
	render() {
		return (
			<Page id="contact">
				<Image sizes={this.props.contact.image.sizes}>
					<Container>
						<HeaderWhite>Get in touch!</HeaderWhite>
						<SubTitle>I'm especially looking for somewhere to do my thesis!</SubTitle>
						<Content>
							{this.props.contact.channels.map((channel) => <Channel channel={channel} />)}
						</Content>
					</Container>
				</Image>
			</Page>
		)
	}
}


class Channel extends Component {

	constructor(props) {
		super(props)
		this.state = {
			hovered: false
		}
	}

	render() {
		const { channel } = this.props
		return (
			<a style={{ textDecoration: "none" }} href={channel.description} target="_blank">
				<ChannelContainer
					onMouseEnter={() => this.setState({ hovered: true })}
					onMouseLeave={() => this.setState({ hovered: false })}
				>
					<IconContainer hovered={this.state.hovered}>
						<Img sizes={channel.sizes} />
					</IconContainer>
					<Title>{channel.title}</Title>
				</ChannelContainer>
			</a>
		)
	}
}

const Image = styled(BackgroundImage)`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-direction: column;
`

const Content = styled(Row)`
	margin:2rem;
	@media only screen and (max-width: 600px){
		flex-direction: column;
		margin:1rem;
	}

`

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: 4px;
	margin: 4rem;
	@media only screen and (max-width: 600px){
	}
`

const SubTitle = styled.p`
	margin:1rem;
	color: rgba(255,255,255,0.87);
	text-align: center;
	max-width: 100vw;
	text-align:center;

	@media only screen and (max-width: 600px){
		margin: 0.5rem;
	}
 `

const ChannelContainer = styled(Row)`
	text-decoration: none;
	margin: 1rem 3rem;
	padding: 0rem 1rem;
	border-radius: 3rem;
	  z-index: 2;
	  @media only screen and (max-width: 600px){
		margin: 1rem;
	}
`

const Title = styled.p`
	color: rgba(255,255,255,0.87);
	margin:0rem 1rem;
`

const IconContainer = styled.div`
	height: 1.5rem;
	width: 1.5rem;
	margin: 0.75rem;
	filter: ${props => props.hovered ? "none" : "brightness(0) invert(0.87)"};
	@media only screen and (max-width: 600px){
		filter: none;
	}
	transition: all 0.3s ease;
`