import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config';
import ParallaxShapes from '../components/ParallaxShapes';
import BrandList from '../components/BrandList';
import Button from '../components/Button';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import WritingList from '../components/WritingList';

// Uses CSS Modules
import s from './index.module.css';
import g from '../utils/grid.module.css';

export default class Index extends React.Component {
  render () {
    return (
      <ParallaxShapes>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Megan Keesee is a communications professional in San Francisco, California that focuses on startups, institutions, and governments."},
            {"name": "keywords", "content": "Communications, marketing, thought leadership, growth hacking, digital media, san francisco"},
          ]}
        />

        <section className={`${s.topSection} ${g.maxWidth}`}>
          <h1 className={`${s.homename} ${g.g6s}`}>
            <span className={`${s.given}`}>Megan</span>
            <span className={`${s.surname} ${g.noMarginTop}`}>Keesee</span>
          </h1>
          
          <div className={`${g.marginTopLarge}`}>
            <h2 className={`${g.g9m} ${g.g7l}`}>{config.tagline}</h2>
          
            <div className={`${g.spaceBetween} ${g.flexEnd} ${g.flexWrap}`}>
              <div>
                <h4>Get in Touch</h4>
                <h3><a href="mailto:hello@megankeesee.com">hello@megankeesee.com</a></h3>
              </div>
              <SocialIcons className={`${g.marginTopSmall}`} />
            </div>
          </div>
        </section>

        <section className={`${g.maxWidth} ${g.spaceBetween} ${g.flexWrap}`}>
          <div className={`${g.g6s}`}>
            <h2 className="h4">Biography</h2>
            <p>I’ve developed thought leadership for startups, enterprises and institutions from seven countries and developed speaking opportunities for C-suite executives. I’ve partnered with cross-functional teams to manage multiple brands, projects, timelines and budgets.</p>

            <p>I currently work with early stage startups to cultivate key messaging and media campaigns in local, national and international markets. As a PR Manager at Liberty Communications, I’ve lead media relations programs that have yielded 16K+ pieces of unique media coverage and create byline content for leading publications.</p>

            <p>Prior to Liberty Communications, I was an account executive supporting ongoing public relations programs, product launches, and event logistics for a variety of tech clients at The OutCast Agency. While there, I helped launch three companies out of stealth. Additionally, I managed speaking and awards programs and helped brands build a digital presence via blog and social media content.</p>

            <p>I also serve on the Board of Directors for the US National Committee for United Nations Women, which satisfies my passion for gender equality, advocacy and social good</p>

            <p>I live in San Francisco with my dog, boyfriend and our Australian roommate. I speak three languages. I’m a *very* amateur snowboarder, rock climber and runner. I’m always down for an outdoor adventure.</p>
            <p><Button href="/resume.pdf" target="_blank">Download Resume</Button></p>
          </div>

          <div className={`${g.g6s}`}>
           <h2 className="h4">Latest Writing</h2>
           <WritingList />
          </div>
        </section>

        <section className={`${g.maxWidth}`}>
         <h2 className="h4">Brands I've Worked With</h2>
         <BrandList />
        </section>

        <Footer className={`${g.maxWidth} ${g.marginTopLarge}`}/>
      </ParallaxShapes>
    )
  }
}
