import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class ContactPage extends React.Component {
  render() {
    //const siteTitle = get(this, 'props.data.site.siteMetadata.title')
   // const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout style={{ background: '#fff' }}>
        <Helmet title={"Contact"} />
        <div>
        <p>Get in touch</p>
        </div>
      </Layout>
    )
  }
}

export default ContactPage
