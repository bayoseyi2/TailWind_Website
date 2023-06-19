import React from 'react'

import Azure from '../assets/azure.png'
import SQL from '../assets/sqlserver.svg'
import PowerBI from '../assets/powerbi.png'
import JavaScript from '../assets/javascript.png'
import ReactImage from '../assets/react.png'
import FireBase from '../assets/firebase.png'
import Tailwind from '../assets/tailwind.png'
import CSS from '../assets/css.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen  bg-[#bdc4bd99] text-[#1a2752]'>
        {/* container */}
        <div>
            <div>
            <p>Technologies</p>
            <p>I am versatile in the concepts and practical application of these tools</p>
        </div>
        <div>
            <div>
                <img class="object-scale-down h-40 w-90" src={SQL} alt="SQL icon"/> 
            </div>
        </div>
        </div>

    </div>
    
  )
}

export default Skills