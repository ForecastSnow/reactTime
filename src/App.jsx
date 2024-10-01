import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer ejemplo='Hola mundo.' />
    </>

  )
}

export default App
