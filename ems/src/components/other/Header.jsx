import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end h-[10%]'>

<h1 className='text-2xl text-white'> Hello <br/> <span className='text-3xl ' >Sourav 🖐</span></h1>
<button className='bg-red-500 text-sm font-medium text-white px-4 py-5 rounded-b-sm'>Log Out</button>


    </div>
  )
}

export default Header;