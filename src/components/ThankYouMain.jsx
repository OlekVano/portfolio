import React from 'react'

import * as styles from './ThankYouMain.module.css'

import Waves from './Waves'
import Birds from './Birds'

const ThankYouMain = () => {
    return (
        <div className={styles.thankYouMain} >
            <title>Thank you</title>
            <Birds />
            <div className={styles.main} >
                <div className={styles.title} >Thank you</div>
                <div className={styles.subtitle}>The form was submitted successfully</div>
                <a className={styles.btn} href='/#index-page' >Back Home</a>
            </div>
            <Waves />
        </div>
    )
}

export default ThankYouMain