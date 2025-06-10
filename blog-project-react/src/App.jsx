import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import BookStore from './assets/bookStore'
import Counter from './assets/counter'
import Team from './assets/team'
import Friends from './assets/friends'
import Users from './assets/user'
import Friend from './assets/Friend'


function App() {

  const actors = ['salib', 'jonkaqi', 'shorna', 'ripa ']
  
  const books = [
    { id: 1, name: 'physics', price: 100 },
    { id: 2, name: 'math', price: 102 },
    { id: 3, name: 'physics', price: 200 },
    { id: 4, name: 'physics', price: 130 }
  ]

  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button 2 click')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3> React core concept 2</h3>

      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click me</button>
      <button onClick={() => { alert('third clicked') }}>Click me</button>
      <button onClick={() => addToFive(0)}>Four</button>

      {/* <BookStore books={books}></BookStore> */}

      
      <h1>Vite + React</h1>
      <Person></Person>
{/* 
      <Student grade="3.60" score="87"></Student>
      <Student grade={23} score="26"></Student>
      <Student></Student>

      <Developer></Developer> */}

      <Friends></Friends>
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
