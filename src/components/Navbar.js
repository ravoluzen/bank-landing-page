import { useState, useEffect } from 'react'
import {ReactComponent as Logo} from '../images/logo.svg'


const Navbar = () => {
  
  const [toggle, setToggle] = useState(false)


  return (

    <nav className='p-4 bg-white fixed shadow w-full flex flex-row justify-evenly items-center'>
        <Logo/>
        <section className='w-2/5 flex flex-row justify-around'>
                <a href="#home">Home</a>
                <a href='#about'>About</a>
                <a href='#blogs'>Blogs</a>
                <a href='#contact'>Contact</a>
        </section>
        <button className='w-48 p-4 rounded-full shadow bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold hover:opacity-60 hidden md:visible'>
                Request Invite
        </button>
    </nav>
  )
}

export default Navbar