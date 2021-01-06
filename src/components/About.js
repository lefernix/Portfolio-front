import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
// import { TimeLine } from '../components/TimeLine'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
// import WorkIcon from '@material-ui/icons/Work'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allRestApiApiV1UsersLefernix {
        edges {
          node {
            ranks {
              languages {
                javascript {
                  score
                  name
                }
              }
            }
            username
            honor
          }
        }
      }
      allImageSharp(
        filter: { fluid: { originalName: { eq: "zcodewars.png" } } }
      ) {
        edges {
          node {
            id
            fluid(pngQuality: 10) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <section>
      <h1 id="about">A propos</h1>
      <div className="presentation">
        <p>
          Jeune développeur web fullstack de 22 ans passionné par l'informatique
          et la création de contenu. En recherche d'opportunités afin de mettre
          en application mes compétences en développement ainsi que mes
          connaissances, ma motivation et mon dynamisme au sein de votre
          entreprise.
        </p>
        <div className="codewars">
          <a href="https://www.codewars.com/users/lefernix" className="codewars-logo"
            target="_blank"
            rel="noopener noreferrer"><Img fluid={data.allImageSharp.edges['0'].node.fluid} /></a>
          {data.allRestApiApiV1UsersLefernix.edges.map((e, index) => (
            <div className="metrics" key={index}>
              <p>Username : {e.node.username}</p>
              <p>Honor : {e.node.honor}</p>
              <p>JavaScript : {e.node.ranks.languages.javascript.score} pts</p>
              <p>Rank : {e.node.ranks.languages.javascript.name}</p>
            </div>
          ))}
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3282b8', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3282b8' }}
            date="2014 - 2017"
            iconStyle={{ background: '#3282b8', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Baccalauréat</h3>
            <h4 className="vertical-timeline-element-subtitle">Poitiers(86), France 🇫🇷</h4>
            <p>
            BAC technologique spécialité mercatique à Lycée Aliénor d'Aquitaine.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3282b8', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3282b8' }}
            date="2018 - 2019"
            iconStyle={{ background: '#3282b8', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Jobs + autodidacte dev</h3>
            <h4 className="vertical-timeline-element-subtitle">France 🇫🇷</h4>
            <p>
      Effectué plusieurs petits travails pour financer l'intégration dans ma future école, tout en apprenant le developpement web informatique.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3282b8', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3282b8' }}
            date="2019 - 2020"
            iconStyle={{ background: '#3282b8', color: '#fff' }}
            icon={URL}
          >
            <h3 className="vertical-timeline-element-title">Etudiant développeur web</h3>
            <h4 className="vertical-timeline-element-subtitle">Tours(37), France 🇫🇷</h4>
            <p>
      Préparation d'un BAC+2 développeur web et web mobile spécialité JavaScript au sein de l'école numérique WildCodeSchool.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3282b8', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3282b8' }}
            date="2020"
            iconStyle={{ background: '#3282b8', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Stagiaire développeur fullstack</h3>
            <h4 className="vertical-timeline-element-subtitle">Tours(37), France 🇫🇷</h4>
            <p>
      Stagiaire au sein d'une start'up, pour développer une application de création/gestion de site pour hôtelier.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#3282b8', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3282b8' }}
            date="2020 - 2021"
            iconStyle={{ background: '#3282b8', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Etudiant apprenti développeur web avancé</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote, France 🇫🇷</h4>
            <p>
      Préparation d'un BAC+4 développeur et concepteur d'application au sein de l'école numérique WildCodeSchool, en alternance dans la start'up FASST.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#3282b8', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3282b8' }}
            date="2020 - aujourd'hui"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Développeur web fullstack</h3>
            <h4 className="vertical-timeline-element-subtitle">Angoulême(16), France 🇫🇷</h4>
            <p>
            Apprenti au sein de la start'up FASST, participant à différents projets clients autour de l'assurance collective.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default About
