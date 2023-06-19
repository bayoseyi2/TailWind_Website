import React from 'react'

import Azure from '../assets/azure.png'
import SQL from '../assets/sqlserver.svg'
import PowerBI from '../assets/powerbi.png'
import JavaScript from '../assets/javascript.png'
import ReactImage from '../assets/react.png'
import FireBase from '../assets/firebase.png'
import Tailwind from '../assets/tailwind.png'
import PythonImage from '../assets/Python.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#bdc4bd99] text-gray-60'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
            <p className='text-4xl font-bold inline border-b-4 border-t-4 border-yellow-600 '>Technologies</p>
            <p className='py-4'>I am versatile in the concepts and practical application of these tools and others</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-yellow-600 hover:scale-110 duration-500'>
                <img  className="w-20 mx-auto" src={SQL} alt="SQL icon"/> 
                <p className='my-4'></p>
            </div>
            <div className='shadow-md shadow-yellow-600 hover:scale-110 duration-500'>
                <img  className="w-20 mx-auto" src={Azure} alt="Azure icon"/> 
                <p className='my-4'>Microsoft Azure</p>
            </div>
            <div className='shadow-md shadow-yellow-600 hover:scale-110 duration-500'>
                <img  className="w-20 mx-auto" src={PowerBI} alt="PowerBI icon"/> 
                <p className='my-4'>Microsoft Power BI</p>
            </div>
            <div className='shadow-md shadow-[rgb(206,154,102)] hover:scale-110 duration-500'>
                <img  className="w-20 mx-auto" src={JavaScript} alt="Javascript icon"/> 
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-yellow-600 hover:scale-110 duration-500'>
                <img  className="w-20 mx-auto" src={PythonImage} alt="Python icon"/> 
                <p className='my-4'>Python</p>
            </div>
            <div className='shadow-md shadow-yellow-600 hover:scale-110 duration-500'>
                <img  className="w-20 mx-auto" src={ReactImage} alt="React icon"/> 
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[rgb(206,154,102)] hover:scale-110 duration-500'>
                <img  className="w-20 mx-auto" src={FireBase} alt="Firebase icon"/> 
                <p className='my-4'>Google Firebase</p>
            </div>
            <div className='shadow-md shadow-yellow-600 hover:scale-110 duration-500'>
                <img  className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon"/> 
                <p className='my-4'>TailwindCSS</p>
            </div>
            
        </div>
        </div>

    </div>
    
  )
}

export default Skills