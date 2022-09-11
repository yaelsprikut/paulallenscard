import React, { useState, useEffect } from 'react'
import './Newsboard.css'
require('./scripts/dashboard')
// import styled from 'styled-components';
import Card from './components/Card'

const COLOUR_ARRAY = [
  "pink",
  "purple",
  "cyan",
  "amber",
  "blue",
  "red",
  "indigo",
  "orange",
  "green"
]

const App = () => {
  // useEffect(() => {
  //  console.log("run useEffect")
  // });
  let showCard = []
  for (let i = 0; i < 45; i++) {
    console.log("COLOUR_ARRAY Item: ", COLOUR_ARRAY[i % COLOUR_ARRAY.length])
    showCard.push(<Card color={COLOUR_ARRAY[i % COLOUR_ARRAY.length]} />)

  }
    return (
        <div
            className="dashboard display-animation"
            style={{ margin: '0 auto', width: '1130px' }}
        >
          {showCard}
            {/* <Card color="pink" />
            <Card color="purple" />
            <Card color="cyan" />
            <Card color="amber" />
            <Card color="blue" />
            <Card color="red" />
            <Card color="indigo" />
            <Card color="orange" />
            <Card color="green" /> */}
        </div>
    )
}

export default App
