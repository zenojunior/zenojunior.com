import React, {useRef} from 'react'
import ReactToPrint from 'react-to-print';
import styled from 'styled-components'
import Moment from 'react-moment';
import 'moment/locale/es-us';

import A4 from '../components/wrapper/a4'
import PageTitle from '../components/typography/page-title'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Icon from '../components/typography/icon'

const data = {
  name: "Zeno Junior",
  fullName: "Zeno Sbardelotto Junior",
  address: "Lajeado - RS, Brazil",
  email: "me@zenojunior.com",
  resume: "Front-end engineer enthusiastic about scalable and complex web applications",
  experiences: [
    {
      title: "Front-end developer",
      logo: require('../images/companies/cuponomia.png'),
      company: "Cuponomia",
      period: {
        start: "2019-09-10"
      },
      description: "I built the extension for the Chrome Web Store, SPA as the main architecture, using Vuejs Framework (Javascript)."
    },
    {
      title: "Full-stack developer",
      logo: require('../images/companies/itcode.png'),
      company: "Itcode Soluções Web",
      period: {
        start: "2018-09-01",
        end: "2019-09-10"
      },
      description: "I built PWAs using the Laravel Framework (PHP). I developed Chatbot for Discord using Nodejs (Javascript on the server side). I was responsible for creating the mobile app front-end using Flutter (Dart)."
    },
    {
      title: "Junior Front-end developer",
      logo: require('../images/companies/visaoi.png'),
      company: "Visãoi Sistemas Web",
      period: {
        start: "2014-06-01",
        end: "2018-09-01"
      },
      description: "I worked on the recreation of the product interfaces, using Jquery and Bootstrap. I improved my knowledge in Mobile First, Accessibility and W3C Standards for web development. I was responsible for the implementation and training of services in government institutions. Here I developed advanced skills with CSS3 and HTML5."
    },
  ],
  formations: [
    {
      title: "Software Engineering",
      logo: require('../images/companies/univates.png'),
      company: "Universidade do Vale do Taquari - Univates",
      period: {
        start: "2014-06-01"
      }
    },
  ],
  aside: [
    {
      title: "Skills",
      items: ["User Experience", "Development", "HTML/CSS", "Design for Interfaces", "Git"]
    },
    {
      title: "Interest",
      items: ["Micro services", "Nodejs and Javascript", "UI/UX Design", "Task automation"]
    },
    {
      title: "Motivators",
      items: ["People engaged in the team", "Remote work", "Build things for people"]
    },
    {
      title: "Links",
      items: ["zenojunior.com", "linkedin.com/ln/zenojunior", "github.com/zenojunior"]
    }
  ]
}

const ResumePage = () => {
  const print = useRef();
  return (
    <Layout>
      <SEO title="My CV 📃" />
      <PageTitle>My <b>paper resume</b></PageTitle>
        <A4>
          <div ref={print} style={{display: 'flex'}}>
            <Left>
              <Header>
                <Title>{ data.name }</Title>
                <Resume>{ data.resume }</Resume>
              </Header>
              <section>
                <Subtitle>About me</Subtitle>
                <p>I have more than <ExperienceYears /> of experience with web development. I am dedicating to being a senior front-end engineer. My greatest strength is the desire to change and enjoy making things happen.</p>
              </section>
              <Experiences>
                <Subtitle>Experiences</Subtitle>
                { data.experiences.map(job => {
                  return (
                    <Job title={job.title}
                         logo={job.logo}
                         company={job.company}
                         periodStart={job.period.start}
                         periodEnd={job.period.end}
                         description={job.description}
                    />
                  )
                }) }
              </Experiences>
              <Formations>
                <Subtitle>Formation</Subtitle>
                { data.formations.map(formation => {
                  return (
                    <Job title={formation.title}
                         logo={formation.logo}
                         company={formation.company}
                         periodStart={formation.period.start}
                         periodEnd={formation.period.end}
                         description={formation.description}
                    />
                  )
                }) }
              </Formations>
            </Left>
            <Aside>
              <div className="info">
                <p>{ data.fullName }</p>
                <address>{ data.address }</address>
                <a>{ data.email }</a>
              </div>
              { data.aside.map(widget => <AsideWidget title={widget.title} items={widget.items} /> ) }
            </Aside>
          </div>
        </A4>
      <ButtonGroup>
        <ReactToPrint
          trigger={() => {
            return (
              <Button>
                <Icon name={'print'} style={{fontSize: '24px', marginRight: '10px', whiteSpace: 'nowrap'}}></Icon>
                Print out
              </Button>
            )
          }}
          content={() => print.current}
        />
      </ButtonGroup>
    </Layout>
  )
}

const ExperienceYears = () => {
  const firstYear = 2014;
  return (<Moment toNow ago parse="YYYY" locale="en-us">{ firstYear }</Moment>)
}

const Job = ({ title, logo, company, periodStart, periodEnd, description }) => (
  <div>
    <div className="header">
      {logo && <span className="logo"><img src={logo} /></span>}
      <div className="infos">
        <h3 className="title">{ title }</h3>
        <p className="company">{ company }</p>
        <small className="period">
          <Moment format="MMM YYYY">{ periodStart }</Moment>
          <span> - </span>
          {!periodEnd ? 'moment' : <Moment format="MMM YYYY">{ periodEnd }</Moment>}
          <Duration duration={periodStart} date={periodEnd} durationFromNow={!periodEnd}/>
        </small>
      </div>
    </div>
    { description && <p>{ description }</p>}
  </div>
)

const Duration = ({ duration, date, fromNow }) => {
  const removeDaysFromString = (d) => {
    let date = d.split(',')
    if (date.length <= 1) return d;
    date.pop()
    return date.filter(s => parseInt(s) !== 0).join(' and')
  };
  const time = <Moment duration={duration} date={date} durationFromNow={fromNow} filter={removeDaysFromString} />;
  return (
    <span className="duration">({ time })</span>
  )
}

const AsideWidget = ({ title, items }) => (
  <section>
    <Subtitle children={title}/>
    <List items={items} />
  </section>
)

const List = ({ items }) => (
  <ul>
    {items.map(item => (<li key={item} style={{listStyleType: `none`}}>{item}</li>))}
  </ul>
)

const Experiences = styled.div`
  .header {
    display: flex;
    margin-bottom: 10px;
    margin-top: 1rem;

    .logo {
      width: 110px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 15px;

      img {
        float: left;
        max-width: 90px;
        max-height: 32px;
        margin: 0;
      }
    }

    .infos {
      display: inherit;
      flex-direction: column;
      margin-right: auto;

      .company {
        margin-bottom: 0;
      }
      .period {
        line-height: 1.2;
        font-family: Roboto;
        font-size: 13px;
        font-weight: 300;
      }
      .duration {
        color: #7b7b7b;
        font-size: 13px;
        font-weight: 300;
        margin-left: 8px;
      }
    }
  }


  h3 {
    font-size: 14px;
    font-family: Roboto;
    margin-bottom: 0;
    line-height: 22px;
  }
`

const Formations = styled(Experiences)`
  .header {
    .logo {
      img {
        max-height: 40px;
      }
    }
  }
  .duration {display: none;}
`;

const ButtonGroup = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  button:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  button:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  button:nth-child(even) {
    border-left: 0;
  }

`

const Button = styled.button`
  background: #fff; 
  border: 1px solid #ddd;
  padding: 10px 15px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Left = styled.div`
  width: 100%;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 4rem;
  flex-direction: column;

  p {
    font-size: 14px;
    line-height: 17px;
    font-family: sans-serif;
  }
`

const Aside = styled.aside`
  width: 24rem;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: inherit;
  flex-direction: column;

  * {
    font-family: sans-serif;
    font-size: 14px;
    margin: 0;
    line-height: 1.2;
  }

  .info {
    margin-top: 4rem;
    display: inherit;
    flex-direction: inherit;
  }
`


const Header = styled.header`
  width: 100%;
  display: inherit;
  flex-direction: inherit;
`
const Title = styled.h1`
  color: #666666;
  font-weight: 700;
  font-size: 35pt;
  font-family: Roboto;
  line-height: 1.0;
  margin-bottom: 10px;
`
const Subtitle = styled.h2`
  font-family: Roboto;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: unset;
  padding-top: 20pt;
  color: #3d85c6;
  font-size: 9pt;
  line-height: 1.0;
`


const Resume = styled.span`
  font-size: 16px;
  font-family: Roboto;
  line-height: 20px;
  color: #6f6f6f;
  display: block;
  font-weight: 400;
`

export default ResumePage