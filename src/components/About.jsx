import React from 'react'

const About = () => {
  return (
    <div name='about'className='w-full h-screen  bg-[#bdc4bd99] text-[#1a2752]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>

            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>  
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-t-4 border-b-4 border-yellow-600'>
                        About
                    </p>
                 </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Bayo, with several years of experience in data analysis and app development</p>
            </div>

            <div>
                <p>I love applying concepts such as database normalization, data mining, data integration, ETL and data cleansing. I use the following tools to achieve these; SQL queries, stored procedures and triggers, Python. To visualize, I employ Power Query, Power BI and Tableau. </p>
            </div>

        </div>
        </div>
        </div>

  )
}

export default About