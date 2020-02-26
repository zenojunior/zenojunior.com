import React from 'react'

import Layout from '../components/layout'
import PageTitle from '../components/typography/page-title'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" sufix={false} />
    <PageTitle>This page was attracted by a <b>black hole</b> 🕳</PageTitle>
    <p style={{fontFamily: 'Roboto'}}>You have just accessed a page that does not exist.</p>
  </Layout>
)



export default NotFoundPage
