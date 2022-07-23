import React from 'react'
import * as styles from './ExploreScreen.module.css'

import Birds from './Birds'
import Waves from './Waves'

const ExploreScreen = () => {
  return (
    <div className={styles.exploreScreen} >
      <Birds />
      <div className={styles.main} >
        <div className={styles.title} >Hi, I'm Oleksiy</div>
        <div className={styles.subtitle}>and this is my portfolio website where I will be sharing some of my personal information, skills and projects</div>
      </div>
      <Waves />
    </div>
  )
}

export default ExploreScreen