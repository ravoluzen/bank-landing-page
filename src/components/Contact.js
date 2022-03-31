
import {FaFacebook as FB, FaYoutube as YT, FaInstagram as IG, FaTwitter as TW, FaPinterest as PT} from 'react-icons/fa'

const Contact = () => {
  return (
    <div id="contact" 
    className='w-full h-auto p-12 flex flex-col justify-evenly items-center bg-slate-800 lg:flex-row lg:p-28'>

        <section className='w-4/5 mb-8 flex flex-row justify-evenly items-center text-white text-2xl cursor-pointer'>
                <FB/>
                <YT/>
                <TW/>
                <PT/>
                <IG/>
        </section>

        <section className='flex flex-col items-center w-4/5 h-max mb-8'>
            <ul className='w-2/5 h-56 mb-8 grid grid-cols-1 justify-around items-center text-white opacity-70 cursor-pointer lg:grid-cols-3 lg:w-3/5 lg:text-left lg:mt-8'>

                <li>About Us</li>
                <li>Contact</li>
                <li>Blogs</li>
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>

            </ul>
        </section>

        <section>
            <button className='w-48 mb-24 p-4 rounded-full shadow bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold lg:mb-8 hover:opacity-80'>
                    Request Invite
            </button>

            <p className='text-slate-400 font-semibold'>Easybank. All Rights Reserved.</p>
        </section>
    </div>
  )
}

export default Contact