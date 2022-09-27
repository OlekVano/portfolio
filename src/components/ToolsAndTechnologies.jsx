import React from 'react'
import * as styles from './ToolsAndTechnologies.module.css'

import pyLogo from '../images/python-logo.png'
import jsLogo from '../images/js-logo.png'
import htmlLogo from '../images/html-logo.png'
import cssLogo from '../images/css-logo.png'
import scssLogo from '../images/scss-logo.svg'
import nodeLogo from '../images/node-logo.png'
import reactLogo from '../images/react-logo.png'
import gatsbyLogo from '../images/gatsby-logo.png'
import tailwindLogo from '../images/tailwind-logo.png'
import csharpLogo from '../images/c-sharp-logo.png'
//import unityLogo from '../images/unity-logo.png'
import vscodeLogo from '../images/vscode-logo.png'
import gitLogo from '../images/git-logo.png'

const ToolsAndTechnologies = () => {
  return (
    <div className={styles.toolsAndTechnologies} >
      <div className={styles.container} >
        <div className={`${styles.title} hidden`} >Tools / Technologies</div>
        <div className={styles.tools} style={{marginTop: '5vw'}} >
          <div className={`${styles.bigTool} hidden tool`}><a target='_blank' rel='noopener noreferrer' href='https://www.javascript.com' className={styles.bubble}><img alt='JS logo' className={styles.image} src={jsLogo} /></a></div>
          <div className={`${styles.bigTool} hidden tool`}><a target='_blank' rel='noopener noreferrer' href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5' className={styles.bubble}><img alt='HTML logo' className={styles.image} src={htmlLogo} /></a></div>
          <div className={`${styles.bigTool} hidden tool`}><a target='_blank' rel='noopener noreferrer' href='https://developer.mozilla.org/en-US/docs/Web/CSS' className={styles.bubble}><img alt='CSS logo' className={styles.image} src={cssLogo} /></a></div>
          <div className={`${styles.bigTool} hidden tool`}><a target='_blank' rel='noopener noreferrer' href='https://sass-lang.com' className={styles.bubble}><img alt='SCSS logo' className={styles.image} src={scssLogo} /></a></div>
          <div className={`${styles.bigTool} hidden tool`}><a target='_blank' rel='noopener noreferrer' href='https://nodejs.org' className={styles.bubble}><img alt='Node.js logo' className={styles.image} src={nodeLogo} /></a></div>
          <div className={`${styles.bigTool} hidden tool`}><a target='_blank' rel='noopener noreferrer' href='https://reactjs.org' className={styles.bubble}><img alt='React logo' className={styles.image} src={reactLogo} /></a></div>
          <div className={`${styles.bigTool} hidden tool`}><a target='_blank' rel='noopener noreferrer' href='https://www.gatsbyjs.com' className={styles.bubble}><img alt='Gatsby logo' className={styles.image} src={gatsbyLogo} /></a></div>
          <div className={`${styles.bigTool} hidden tool`}><a target='_blank' rel='noopener noreferrer' href='https://tailwindcss.com' className={styles.bubble}><img alt='Tailwind logo' className={styles.image} src={tailwindLogo}/></a></div>
          <div className={`${styles.bigTool} hidden tool`}><a target='_blank' rel='noopener noreferrer' href='https://www.python.org' className={styles.bubble}><img alt='Python logo' className={styles.image} src={pyLogo} /></a></div>
          <div className={`${styles.bigTool} hidden tool`}><a target='_blank' rel='noopener noreferrer' href='https://docs.microsoft.com/en-us/dotnet/csharp' className={styles.bubble}><img alt='C# logo' className={styles.image} src={csharpLogo} /></a></div>
          <div className={`${styles.bigTool} hidden tool`}><a target='_blank' rel='noopener noreferrer' href='https://code.visualstudio.com' className={styles.bubble}><img alt='VSC logo' className={styles.image} src={vscodeLogo} /></a></div>
          <div className={`${styles.bigTool} hidden tool`}><a target='_blank' rel='noopener noreferrer' href='https://git-scm.com' className={styles.bubble}><img alt='Git logo' className={styles.image} src={gitLogo} /></a></div>
        </div>
      </div>
    </div>
  )
}

export default ToolsAndTechnologies