import React from 'react'
import * as styles from './ExploreScreen.module.css'

import Header from './Header'
import Birds from './Birds'
import Waves from './Waves'

const ExploreScreen = () => {
  return (
    <div className={styles.exploreScreen} >
      <Header />
      <Birds />
      <div className={styles.main} >
        <div className={`${styles.title} hidden`} >Hi, I'm Oleksiy</div>
        <div className={`${styles.subtitle} hidden`}>and this is my portfolio website where I will be sharing some of my personal information, skills and projects</div>
      </div>
      <Waves />
    </div>
  )
}

export default ExploreScreen