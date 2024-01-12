import React from 'react'

const items = ['pant','tshart','kurta']

function  getRandomInt( max){
    return Math.random() * (max + 1)
}




export default function Main() {
    const result = items[getRandomInt(2)];
  return (
    <div>{result}</div>
  )
}
