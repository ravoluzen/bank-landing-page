import hero from '../images/image-mockups.png'

const Home = () => {

  return (

    <div id="home" className='w-full h-screen p-8 flex flex-col justify-around items-center lg:flex-row lg:justify-around lg:p-32 lg:text-left'>

        <div className="w-auto h-full lg:order-2 lg:ml-24">

            <img src={hero} alt='mockups' className='-mt-16 lg:max-w-2xl'></img>

        </div>

        <section className='lg:w-2/3 lg:mt-32'>

            <h1 className='mb-8 text-4xl font-semibold text-slate-800 lg:text-5xl'>
                Next generation digital banking
            </h1>

            <p className='mb-8 text-lg text-slate-700 lg:text-xl'>
                Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
            </p>

            <button className='w-48 mb-24 p-4 rounded-full shadow bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold hover:opacity-60'>
                Request Invite
            </button>

        </section>

    </div>
  )
}

export default Home