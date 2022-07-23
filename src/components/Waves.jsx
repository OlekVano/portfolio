import React from 'react'
import * as styles from './Waves.module.css'

const Waves = () => {
  return (
    <svg className={styles.waves} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 24 150 28' preserveAspectRatio='none' shape-rendering='auto'>
        <defs>
            <path id='gentle-wave' d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' />
        </defs>
        <g>
            <use className={styles.waveOne} xlinkHref='#gentle-wave' x='48' y='0' fill='#360CCD' />
            <use className={styles.waveTwo} xlinkHref='#gentle-wave' x='48' y='3' fill='#2A4EE5' />
            <use className={styles.waveThree} xlinkHref='#gentle-wave' x='48' y='5' fill='#1E90FC' />
            <use className={styles.waveFour} xlinkHref='#gentle-wave' x='48' y='7' fill='#58CCED' />
        </g>
    </svg>
  )
}

export default Waves