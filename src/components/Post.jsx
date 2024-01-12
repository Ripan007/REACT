import React from 'react'
import styless from './Post.module.css'

export default function Post({title,describe}) {
  return (
    <section className={styless.container}>
        <h1>{title}</h1>
        <p>{describe}</p>
    </section>
  )
}
