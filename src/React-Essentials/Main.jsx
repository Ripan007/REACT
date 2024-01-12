import React from 'react'

const items = ['pant','tshart','kurta']

function  getRandomInt(max){
    return Math.floor(Math.random()  * max)



}

    console.log(Math.floor(Math.random() * max));




export default function Main() {
    const result = items[getRandomInt(2)];
  return (
    <div>{result}</div>
  )
}
