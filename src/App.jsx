import { useState } from 'react'
import Input from './components/input'
import Nav from './components/nav-bar'
import Done from './components/completed'
import Usrdetails from './components/usr-details'

function App() {
  return (
    <div className='flex w-[100%] bg-[#CEE5F2] h-[100vh]'>
      <Nav />
      <div id='container' className='w-[100%] flex pb-[1vw]'>
          <Input />
      </div>
      <div>
         <Done />
      </div>
      {/* <Usrdetails />   */}
    </div>
  )
}
export default App
