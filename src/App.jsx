import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CardGiovanni from './components/Cards/CardGiovanni'
import styled from "styled-components";
import CardMaria from './components/Cards/CardMaria'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1>G1 info store</h1>
  
  <main>
    
    <CardGiovanni/>
    <CardMaria/>
    

    
    </main>
    </>
  )
}

export default App
