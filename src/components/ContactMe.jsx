import React from 'react'
import * as styles from './ContactMe.module.css'

const ContactMe = () => {
  return (
    <div className={styles.contactMe} >
      <div className={styles.container} >
        <div className={styles.title}>Contact Me</div>
        <div className={styles.formContainer} >
        <form autoComplete='off' className={styles.form} method='POST' action='https://formsubmit.co/59011f3e2aac10c8c0c4f406c0b706a6' enctype='multipart/form-data'>
          <input className={styles.name} type='text' name='name' placeholder='Full Name' required/>
          <input className={styles.email} type='email' name='email' placeholder='Email' required />
          <textarea className={styles.message} name='message' placeholder='Message' required />
          <button className={styles.submit} type='submit'>Submit</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe