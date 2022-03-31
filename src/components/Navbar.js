import { useState, useEffect } from 'react'
import {ReactComponent as Logo} from '../images/logo.svg'


const Navbar = () => {
  
  const [toggle, setToggle] = useState(false)


  return (

    <nav className='p-4 bg-white fixed shadow w-full flex flex-col justify-evenly items-center md:flex-row'>
        <Logo/>
        <section className='w-full m-4 flex flex-row justify-around font-bold text-slate-900 md:w-2/5'>
                <a href="#home" className='hover:text-green-500'>Home</a>
                <a href='#about' className='hover:text-green-500'>About</a>
                <a href='#blogs'className='hover:text-green-500'>Blogs</a>
                <a href='#contact'className='hover:text-green-500'>Contact</a>
        </section>
        <button className='w-48 p-4 rounded-full shadow bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold hover:opacity-60 hidden md:block'>
                Request Invite
        </button>
    </nav>
  )
}

export default Navbar