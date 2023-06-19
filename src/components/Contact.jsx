import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#bdc4bd99] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/dc1d4fd1-0681-4612-905c-13e6afb439b2" className='flex flex-col max-w-600 w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-t-4 border-yellow-600 text-gray-600'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or send me an email at bayocana@gmail.com</p>
            </div>
            <input className='bg-[white] p-2'  type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[white]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[white] p-2' name="message" placeholder='Message' rows="10"></textarea>
            <button className='text-gray-600 border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex itmes-center'>Let's talk</button>
        </form>
    </div>
  )
}

export default Contact