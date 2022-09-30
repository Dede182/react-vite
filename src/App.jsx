import React from 'react'
import './App.css';
import { CgSpinnerTwo } from 'react-icons/cg'
const App = () => {
  return (
    <div className='flex justify-center h-[40vh] items-center  text-red-900 text-2xl'>
      <button type="button" class="flex flex-row items-center" >
    
          <CgSpinnerTwo class="animate-spin h-5 w-5 mr-3 ..."  />
      
        Processing...
      </button>
    </div>
  )
}

export default App
