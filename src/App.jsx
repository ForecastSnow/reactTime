import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import HomeTankGaleryConteiner from './components/HomeTankGaleryContainer'
import ItemDetailConteiner from './components/ItemDetailConteiner'
import Footer from './components/Footer'
import './App.css'

/* react router */

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  return (


    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path="/reactTime/" element={<><HomeTankGaleryConteiner /> <ItemListContainer /></>} />

        <Route path="/reactTime/category/:category" element={<ItemListContainer />} />

        <Route path='/reactTime/product/:idSelected' element={<ItemDetailConteiner/>}/>

      </Routes>

      <Footer/>

    </BrowserRouter>



  )

}

export default App
