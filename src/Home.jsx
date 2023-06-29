import React from 'react'
import LeftSide from './LeftSide'
import CenterSide from './CenterSide'
import { Route, Routes } from 'react-router-dom'
import { Registrar } from './Registrar'
import Analise from './Analise'
import Estoque from './Estoque'
import Preview from './Preview'

const Home = () => {
  return (
      <div className='main'>
        <div className='a'>
        <LeftSide />
        </div>
        <div className='b'>
          <Routes>
                <Route path='/' element={<Preview />}/>  
                <Route path='registrar' element={<Registrar />}/> 
                <Route path='analise' element={<Analise />}/>            
                <Route path='estoque' element={<Estoque />}/>            
          </Routes>
        </div>
        <div className='c'>c</div>
     </div>
  )
}

export default Home