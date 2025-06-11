import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './assets/posts'
import BookStore from './assets/bookStore'



function App() {


  return (
    <>
      <h3> React core concept 2</h3>

      <ol>
        <li>Component</li>
        <li>Component</li>
        <li>Component</li>
        <li>Component</li>
        <li>Component</li>
        <li>Component</li>
        <li>Component</li>
      </ol>
      <hr />
    <Posts></Posts>
      {/* <BookStore books={books}></BookStore> */}

      
    
    </>
  )
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'shorna', age: 12 }

  return <h3>I am a {person.name} developer with age: {age + money} </h3>
}

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Grade: {grade} </p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }

  return (
    <div style={developerStyle}>
      <h5>Devo developer</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
