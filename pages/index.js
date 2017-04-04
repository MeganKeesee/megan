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
            <h2 className={`${g.g9l}`}>Building brands by connecting people with company missions.</h2>
          
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
            <p>I’ve developed thought leadership for startups, enterprises and institutions from seven countries. I’ve secured and written speaking opportunities for C-suite executives.</p>
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
