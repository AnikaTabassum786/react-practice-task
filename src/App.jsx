import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskOne from './Counter'
import ShowHideMsg from './ShowHideMsg'
import Players from './Players'

function App() {
  

  return (
    <>
      <h1>Task No 1</h1>
      <TaskOne></TaskOne>
      <h1>Task No 2</h1>
      <ShowHideMsg></ShowHideMsg>
      <h1>Task No 3</h1>
      
      <Players></Players>
     
    </>
  )
}

export default App
