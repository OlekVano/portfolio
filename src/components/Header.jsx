import React from 'react'
import * as styles from './Header.module.css'

import githubLogo from '../images/github-logo.png'


const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <a className={styles.link} href='https://github.com/OlekVano' target='_blank'><img className={styles.image} src={githubLogo} alt='Github logo'/></a>
      </div>
    </div>
  )
}

export default Header