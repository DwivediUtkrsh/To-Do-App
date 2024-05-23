import { useState } from 'react'
import Input from './components/input'
import Nav from './components/nav-bar'
import Done from './components/completed'

function App() {

  return (
    <div className='flex w-[100%] bg-[#CEE5F2] h-[100vh]'>
      <Nav />
      <div id='container' className='w-[100%] flex pb-[1vw]'>
          <Input />
      </div>
      <div className='bg-gray-200  h-[2.8vw] w-[16vw] flex items-center justify-center rounded-[0.8vw] absolute bottom-2 left-2 pleaseAdd'>
         <Done />
      </div>
    </div>
  )
}
export default App
