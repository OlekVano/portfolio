import React from 'react'
import * as styles from './ToolsAndTechnologies.module.css'

import pyLogo from '../images/python-logo.png'
import jsLogo from '../images/js-logo.png'
import htmlLogo from '../images/html-logo.png'
import cssLogo from '../images/css-logo.png'
import nodeLogo from '../images/node-logo.png'
import reactLogo from '../images/react-logo.png'
import tailwindLogo from '../images/tailwind-logo.png'
import csharpLogo from '../images/c-sharp-logo.png'
import unityLogo from '../images/unity-logo.png'
import vscodeLogo from '../images/vscode-logo.png'
import gitLogo from '../images/git-logo.png'

const ToolsAndTechnologies = () => {
  return (
    <div className={styles.toolsAndTechnologies} >
      <div className={styles.container} >
        <div className={styles.title} >Tools / Technologies</div>
        <div className={styles.tools} style={{marginTop: '5vw'}} >
          <div className={styles.bigTool}><a target='_blank' rel='noopener noreferrer' href='https://www.python.org' className={styles.bubble}><img alt='Python logo' className={styles.image} src={pyLogo} /></a></div>
          <div className={styles.bigTool}><a target='_blank' rel='noopener noreferrer' href='https://www.javascript.com' className={styles.bubble}><img alt='JS logo' className={styles.image} src={jsLogo} /></a></div>
          <div className={styles.bigTool}><a target='_blank' rel='noopener noreferrer' href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5' className={styles.bubble}><img alt='HTML logo' className={styles.image} src={htmlLogo} /></a></div>
          <div className={styles.bigTool}><a target='_blank' rel='noopener noreferrer' href='https://developer.mozilla.org/en-US/docs/Web/CSS' className={styles.bubble}><img alt='CSS logo' className={styles.image} src={cssLogo} /></a></div>
          <div className={styles.bigTool}><a target='_blank' rel='noopener noreferrer' href='https://nodejs.org' className={styles.bubble}><img alt='Node.js logo' className={styles.image} src={nodeLogo} /></a></div>
          <div className={styles.bigTool}><a target='_blank' rel='noopener noreferrer' href='https://reactjs.org' className={styles.bubble}><img alt='React logo' className={styles.image} src={reactLogo} /></a></div>
          <div className={styles.bigTool}><a target='_blank' rel='noopener noreferrer' href='https://tailwindcss.com' className={styles.bubble}><img alt='Tailwind logo' className={styles.image} src={tailwindLogo}/></a></div>
          <div className={styles.bigTool}><a target='_blank' rel='noopener noreferrer' href='https://docs.microsoft.com/en-us/dotnet/csharp' className={styles.bubble}><img alt='C# logo' className={styles.image} src={csharpLogo} /></a></div>
          <div className={styles.bigTool}><a target='_blank' rel='noopener noreferrer' href='https://unity.com' className={styles.bubble}><img alt='Unity logo' className={styles.image} src={unityLogo} /></a></div>
          <div className={styles.bigTool}><a target='_blank' rel='noopener noreferrer' href='https://code.visualstudio.com' className={styles.bubble}><img alt='VSC logo' className={styles.image} src={vscodeLogo} /></a></div>
          <div className={styles.bigTool}><a target='_blank' rel='noopener noreferrer' href='https://git-scm.com' className={styles.bubble}><img alt='Git logo' className={styles.image} src={gitLogo} /></a></div>
        </div>
        {/*<div className={styles.columns} >
          <div className={styles.column}>
            <div className={styles.subtitle}>Often usage</div>
            <div className={styles.tools} >
              <div className={styles.bigTool}><a alt='Python logo' href='https://www.python.org' className={styles.bubble}><img className={styles.image} src='/images/python-logo.png' /></a></div>
              <div className={styles.bigTool}><a alt='JS logo' href='https://www.javascript.com' className={styles.bubble}><img className={styles.image} src='/images/js-logo.png' /></a></div>
              <div className={styles.bigTool}><a alt='HTML logo' href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5' className={styles.bubble}><img className={styles.image} src='/images/html-logo.png' /></a></div>
              <div className={styles.bigTool}><a alt='CSS logo' href='https://developer.mozilla.org/en-US/docs/Web/CSS' className={styles.bubble}><img className={styles.image} src='/images/css-logo.png' /></a></div>
              <div className={styles.bigTool}><a alt='Node.js logo' href='https://nodejs.org' className={styles.bubble}><img className={styles.image} src='/images/node-logo.png' /></a></div>
              <div className={styles.bigTool}><a alt='React logo' href='https://reactjs.org' className={styles.bubble}><img className={styles.image} src='/images/react-logo.png' /></a></div>
              <div className={styles.bigTool}><a alt='Tailwind logo' href='https://tailwindcss.com' className={styles.bubble}><img className={styles.image} src='/images/tailwind-logo.png' /></a></div>
              <div className={styles.bigTool}><a alt='C# logo' href='https://docs.microsoft.com/en-us/dotnet/csharp' className={styles.bubble}><img className={styles.image} src='/images/c-sharp-logo.png' /></a></div>
              <div className={styles.bigTool}><a alt='Unity logo' href='https://unity.com' className={styles.bubble}><img className={styles.image} src='/images/unity-logo.png' /></a></div>
              <div className={styles.bigTool}><a alt='VSC logo' href='https://code.visualstudio.com' className={styles.bubble}><img className={styles.image} src='/images/vscode-logo.png' /></a></div>
              <div className={styles.bigTool}><a alt='Git logo' href='https://git-scm.com' className={styles.bubble}><img className={styles.image} src='/images/git-logo.png' /></a></div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.subtitle}>Familiar with</div>
            <div className={styles.tools} >
              <div className={styles.smallTool}><a alt='C++ logo' href='https://docs.microsoft.com/en-us/cpp/cpp' className={styles.bubble}><img className={styles.image} src='/images/cpp-logo.png' /></a></div>
              <div className={styles.smallTool}><a alt='Java logo' href='https://www.java.com' className={styles.bubble}><img className={styles.image} src='/images/java-logo.png' /></a></div>
              <div className={styles.smallTool}><a alt='Spigot logo' href='https://www.spigotmc.org' className={styles.bubble}><img className={styles.image} src='/images/spigot-logo.png' /></a></div>
              <div className={styles.smallTool}><a alt='Go logo' href='https://go.dev' className={styles.bubble}><img className={styles.image} src='/images/go-logo.png' /></a></div>
              <div className={styles.smallTool}><a alt='Kotlin logo' href='https://kotlinlang.org' className={styles.bubble}><img className={styles.image} src='/images/kotlin-logo.png' /></a></div>
              <div className={styles.smallTool}><a alt='Discord logo' href='https://discord.com/developers/docs/game-sdk/applications' className={styles.bubble}><img className={styles.image} src='/images/discord-logo.ico' /></a></div>
              <div className={styles.smallTool}><a alt='Discord.js logo' href='https://discord.js.org' className={styles.bubble}><img className={styles.image} src='/images/discordjs-logo.svg' /></a></div>
              <div className={styles.smallTool}><a alt='Discord.py logo' href='https://discordpy.readthedocs.io/en/stable' className={styles.bubble}><img className={styles.image} src='/images/discordpy-logo.svg' /></a></div>
              <div className={styles.smallTool}><a alt='Rust logo' href='https://www.rust-lang.org' className={styles.bubble}><img className={styles.image} src='/images/rust-logo.svg' /></a></div>
              <div className={styles.smallTool}><a alt='Arduino logo' href='https://docs.arduino.cc' className={styles.bubble}><img className={styles.image} src='/images/arduino-logo.png' /></a></div>
              <div className={styles.smallTool}><a alt='SWI Prolog logo' href='https://www.swi-prolog.org' className={styles.bubble}><img className={styles.image} src='/images/prolog-logo.png' /></a></div>
            </div>
          </div>
  </div>*/}
      </div>
    </div>
  )
}

export default ToolsAndTechnologies