import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import media from 'styled-media-query'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Icon from '../components/typography/icon'

import PageTitle from '../components/typography/page-title'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Avatar from '../components/pictures/avatar-notebook';

const ContactPage = ({ email }) => (
  <Layout>
    <SEO title="Talk to me ✉️" />
    <PageTitle><b>You can get in touch</b> anytime through</PageTitle>
    <Section>
      <Avatar />
      <Items>
        <Item>
          <Icon name="email" />
          <EmailLink address={email} />
        </Item>
        <Item>
          <BrandIcon icon={faGithubAlt} />
          <StyledLink href="https://github.com/zenojunior" target="_blank" rel="noopener noreferrer">zenojunior</StyledLink> 
        </Item>
        <Item>
          <BrandIcon icon={faTwitter} />
          <StyledLink href="https://twitter.com/ozenojunior" target="_blank" rel="noopener noreferrer">ozenojunior</StyledLink> 
        </Item>
        <Item>
          <BrandIcon icon={faLinkedinIn} />
          <StyledLink href="https://www.linkedin.com/in/zenojunior/" target="_blank" rel="noopener noreferrer">zenojunior</StyledLink> 
        </Item>
      </Items>
      </Section>
  </Layout>
)

const Section = styled.section`
  display: inherit;
  align-items: inherit;
  flex-direction: row;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`

const Item = styled.li`
  display: flex;
  span, svg, a {
    color: #999;
  }
  &:hover{
    span, svg, a {
      color: #5f5f5f;
    }
  } 


  @media (prefers-color-scheme: dark) {
    a {
      color: #9da5b4;
    }
    &:hover{
      span, svg, a {
        opacity: .7;
      }
    } 
  }

`

const Items = styled.ul`
  display: inline-block;
`

const StyledLink = styled.a`
  font-size: 19px;
  color: #0a71c6;
  text-decoration: none;
  font-family: Roboto;
`

const EmailLink = ({ address }) => (
  <StyledLink onClick={() => document.location.href = `mailto:${address}`} style={{direction: 'rtl', unicodeBidi: 'bidi-override', cursor: 'pointer'}}>
    { reverseString(address) }
  </StyledLink>
)

const reverseString = (props) => {
  return props.split("").reverse().join("");
}

const BrandIcon = ({ icon }) => (
  <FontAwesomeIcon icon={icon} style={{fontSize: '24px', marginRight: '10px'}}/>
)


ContactPage.defaultProps = {
  email: 'me@zenojunior.com'
}

ContactPage.propTypes = {
  email: PropTypes.string,
}

export default ContactPage