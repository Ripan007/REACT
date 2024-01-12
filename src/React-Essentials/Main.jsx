import React from 'react'

const items = ['pant','tshart','kurta']

function  getRandomInt( max){
    return Math.random() * (max)
}

const result = items[getRandomInt(2)];


export default function Main() {
  return (
    <div>{result}</div>
  )
}
