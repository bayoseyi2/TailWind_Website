import React from 'react'
import NL1 from '../assets/NobelLaureatte_1.png'
import NL2 from '../assets/NobelLaureatte_2.png'
import PH1 from '../assets/PracticeHealthNS_1.png'
import PH2 from '../assets/PracticeHealthNS_2.png'
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#bdc4bd99] text-gray-60'>
        <div className='max-2-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b4 text-gray-600 border-yellow-600'>Work</p>
                <p className='py-6'>Check out some of my recent projects</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                <div style={{backgroundImage:`url(${NL1})`}}
                className='shadow-lg shadow-yellow-600 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-yellow-600 tracking-wider'>
                            Mobile App 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-yellow-600 text-lg'>Demo</button>
                            </a>
                            <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-yellow-600 text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Work