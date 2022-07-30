import React from 'react'

import AboutMe from '../components/AboutMe'
import Bubbles from '../components/Bubbles'
import ContactMe from '../components/ContactMe'
import ExploreScreen from '../components/ExploreScreen'
import ToolsAndTechnologies from '../components/ToolsAndTechnologies'

import '../index.css'

// markup
const IndexPage = () => {
  return (
    <div>
      <title>Oleksiy Vano's Portfolio</title>
      <ExploreScreen />
      {/*<div className='blue-gradient' >
        <AboutMe />
        <SkillsAndKnowledge />
      </div>*/}
      <div className='blue-gradient' >
        <Bubbles />
        <div className='main-container' >
          <AboutMe />
          <ToolsAndTechnologies />
          <ContactMe />
        </div>
      </div>
    </div>
  )
}

export default IndexPage

/*
    siteUrl: `https://olekvano.netlify.app`,
    title: 'Oleksiy Vano\'s portfolio',
    author: 'Oleksiy Vano',
    description: 'Oleksiy Vano\'s portfolio website',
*/