import React from 'react'
import  styles from './Post.module.css'

export default function Post({title,describe}) {
  return (
    <section  className={styles.container}>
        <h1>{title}</h1>
        <p>{describe}</p>
    </section>
  )
}
