import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import HomeTankGaleryConteiner from './components/HomeTankGaleryContainer'
import ItemDetailConteiner from './components/ItemDetailConteiner'
import HomeInfoNosotrosEnvios from './components/HomeInfoNosotrosEnvios'
import Cart from './components/Cart'
import Footer from './components/Footer'
import DevelopingState from './components/developingState'
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

        <Route path="/" element={<><HomeTankGaleryConteiner /> <ItemListContainer /> <HomeInfoNosotrosEnvios /></>} />

        <Route path="/category/:category" element={<ItemListContainer />} />

        <Route path='/product/:idSelected' element={<ItemDetailConteiner />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/developingState' element={<DevelopingState/>} />

      </Routes>

      <Footer />

    </BrowserRouter>



  )

}

export default App
