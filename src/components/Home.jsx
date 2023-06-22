import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

 const Home = () => {
  return (
    <div name='home' className='w-full bg-[#bdc4bd99]'>
        
     {/* Container */}
     <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
       
        <p className='text-yellow-600'>Hi,my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Bayo ADEOLA</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#1a2752]'>I'm an excellent Data Analyst | Full Stack Developer. </h2>
        <p className='text-4xl py-4 max-w-[800px] text-[#8892b0]'>With more than 5 years experience in data analysis, previous experience includes almost two decades in banking, sales, customer service and business intelligence. I am passionate about data analysis and visualization.
            I also enjoy web and mobile application development. I have more than one year experience in full stack and cross-platform app development. 
           
        </p>
        <div>
        <Link  to="work" smooth={true} duration={500} >
            <button className='text-green-700 border-4 group px-6 py-3 ,my-2 flex items-center hover:bg-yellow-600 hover: border-yellow-600 '>View Project 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
            
           
            
            </span>

            </button>
            </Link>
        </div>
     </div>
        
        </div>
  )
}

export default Home