import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id='home'></section>
      <section id='about'></section>
      <section id='portfolio'></section>
      <section id='resume'></section>
      <section id='hobbies-and-interests'></section>
    </>
  )
}

export default App
