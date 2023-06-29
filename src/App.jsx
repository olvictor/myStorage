import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import { Registrar } from './Registrar'
import Analise from './Analise'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Home />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
