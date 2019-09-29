import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Column, Text, Page } from '../../../style/components'
import Img from 'gatsby-image'

export default class ContactPage extends Component {
	render() {
		return (
			<Page id="contact">
				<Container>

				<Header>Get in touch!</Header>
				<Content>

					{this.props.channels.map((channel) =>
						<a style={{textDecoration: "none"}} href={channel.description} target="_blank"><Channel>
							<IconContainer>
								<Img sizes={channel.sizes} />
							</IconContainer>
							<Title>{channel.title}</Title>
						</Channel>
						</a>)}

				</Content>

				</Container>

			</Page>
		)
	}
}

const Content = styled(Row)`
	@media only screen and (max-width: 600px){
		flex-direction: column;
	}

`

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	width: 100vw;
	@media only screen and (max-width: 600px){
		min-height: 100vh;
	}
`

 const Header = styled.p`
	font-size: 4rem;
	font-weight: bolder;
	color: black;
	@media only screen and (max-width: 600px){
		font-size: 2rem;
	}
 `

const Channel = styled(Row)`
	text-decoration: none;
	margin: 1rem 3rem;
	@media only screen and (max-width: 600px){
		margin: 0rem;

	}
`

const Title = styled.p`
	color: black;

`

const IconContainer = styled.div`
	height: 1.5rem;
	width: 1.5rem;
	margin: 1rem;
`