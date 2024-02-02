import React from 'react'
import Inputs from './Component/Inputs'
import Header from './Component/Header'
import Tables from './Component/Table'

const App = () => {
  return (
    <div className='bg-[#1D3557] w-full h-screen'>
      <Header />
      <Inputs />
      <Tables />
    </div>
  )
}

export default App