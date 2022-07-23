import React from 'react'
import * as styles from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <div className={styles.aboutMe} >
      <div className={styles.container} >
        <div className={styles.title}>About Me</div>
        <div className={styles.description} >
          I am Oleksiy Vano, a 16-year-old self-taught developer of Ukrainian origin.<br />
          {/*When I was 9 years old I traveled to Portugal to have a better life and more opportunities.<br />*/}
          I started learning programming by myself when I was 14 years old out of curiosity and I fell in love with it.<br />
          I speak 4 languages: Ukrainian, Russian, English and Portuguese.<br />
        </div>
      </div>
    </div>
  )
}

export default AboutMe