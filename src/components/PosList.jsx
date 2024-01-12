import React from 'react'
import Post from './Post'

export default function PosList() {
  return (
    <ul>
    <Post title ='react' describe='react is awesome'/>
    <Post title = 'next' describe= 'next is much more better than react'/>
    </ul>
  )
}
