import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

 const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#bdc4bd99]'>
        
     {/* Container */}
     <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
       
        <p className='text-yellow-600'>Hi,my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#1a2752]'>Bayo ADEOLA</h1>
        <h2>I'm a Data Analyst and a Full Stack Developer. </h2>
        <p className='text-4xl sm:text-3xl font-bold text-[#8892b0]'>Previous experience include almost two decades in banking, sales, customer service and business intelligence. I am passionate about solving business questions and assisting in decision making based on data analysis and visualization.
            I love web and mobile application development using React frameworks, Node.js, TailwindCSS and Javascript. 
            For data analysis, SQL, Python, Power BI, Ms SQL Server, Power Query, Tableau are some of the tools.
        </p>
        <div>
            <button>View Work <HiArrowNarrowRight/></button>
        </div>
     </div>
        
        </div>
  )
}

export default Home