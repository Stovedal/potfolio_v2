import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Column, Text, Page } from '../../../style/components'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

export default class ContactPage extends Component {
	render() {
		return (
			<Page id="contact">
				<Image sizes={this.props.contact.image.sizes}>
					<Container>
						<Header style={{ color: "white" }}>Get in touch!</Header>
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
	justify-content: center;
	flex-direction: column;
`

const Content = styled(Row)`
	margin:2rem;
	@media only screen and (max-width: 600px){
		flex-direction: column;
	}

`

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: black;
	background-color: rgba(255,255,255,0.12);
	border-radius: 4px;
	@media only screen and (max-width: 600px){
	}
`

const Header = styled.p`
	font-size: 4rem;
	margin:1rem;
	font-weight: bolder;
	color: black;
	@media only screen and (max-width: 600px){
		font-size: 2rem;
	}

 `

const SubTitle = styled.p`
	margin:1rem;
	color:white;
	text-align: center;
 `

const ChannelContainer = styled(Row)`
	text-decoration: none;
	margin: 1rem 3rem;
	@media only screen and (max-width: 600px){
		margin: 0rem;
	}
	:hover {
	}
	transition: 0.3s ease;
`

const Title = styled.p`
	color: white;
	margin:1rem;
`

const IconContainer = styled.div`
	height: 1.5rem;
	width: 1.5rem;
	margin: 1rem;
	filter: ${props => props.hovered ? "none" : "brightness(0) invert(1)"};
	@media only screen and (max-width: 600px){
		margin: 0rem;
		filter: none;
	}
	transition: all 0.3s ease;
`