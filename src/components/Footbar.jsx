import React from 'react'


const Footbar = () => {
    
  return (
    <div className='fixed w-full h-[80px] flex flex-col justify-center items-center px-4 bg-[#0a192f] text-gray-300 z-50 '>
    

    <div>Developed by Bayo Adeola</div>
    <div>bayoseyi@gmail.com</div>
    <div>@{new Date().getFullYear()}</div>

        


    </div>
  )
}

export default Footbar