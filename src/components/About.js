import React from 'react'
import online from '../images/icon-online.svg'
import onboarding from '../images/icon-onboarding.svg'
import budgeting from '../images/icon-onboarding.svg'
import iconapi from '../images/icon-api.svg'

const About = () => {

  const aboutContent = [
      {
          "icon": online,
          "heading": "Online Banking",
          "content": "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
          "id":"1"
      },

      {
        "icon": budgeting,  
        "heading": "Simple Budgeting",
        "content": "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
        "id":"2"
      },

      {
        "icon": onboarding,  
        "heading": "Fast Onboarding",
        "content": "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
        "id":"3"
      },

      {
        "icon": iconapi,  
        "heading": "Open API",
        "content": "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        "id":"4"
      }
  ]

  return (
    <div id="about" className='w-full h-auto p-4 bg-slate-200 md:flex-row lg:text-left lg:p-28'>
        <section className='mt-8 mb-8 p-4 flex flex-col items-center lg:items-start lg:w-2/5 lg:mb-16'>

            <h1 className='mb-4 text-4xl text-slate-900 lg:text-left'>
                Why choose Easybank?
            </h1>
            <p className='text-lg text-slate-700'>
                We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
            </p>
        </section>
        <section className='grid grid-cols-1 justify-between md:grid-cols-2 lg:grid-cols-4'>
            {aboutContent.map((content) => (
                <section key={content.id} className='p-4 flex flex-col items-center lg:items-start'>
                    <img src={content.icon} alt='icon' className='h-20 w-20 mb-4'></img>
                    <h1 className='mb-4 text-2xl text-slate-900'>{content.heading}</h1>
                    <p className='mb-4 text-md text-slate-700'>{content.content}</p>
                </section>
            ))}
        </section>
    </div>
  )
}

export default About