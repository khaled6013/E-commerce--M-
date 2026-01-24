import React from 'react'
import { Link } from 'react-router-dom'
import errorImg from '../assets/image/404.png' 

const PagesM = () => {
  return (
    <section className='lg:py-20 py-12 bg-white'>
        <div className="lg:w-9/12 w-11/12 mx-auto flex flex-col items-center">
            <div className="mb-10">
                <img src={errorImg} alt="404 Not Found" className="max-w-full h-auto" />
            </div>

            <div className="text-center">
                <Link 
                    to="/" 
                    className="bg-[#FB2E86] text-white font-josefin text-[16px] px-8 py-3 rounded-sm hover:bg-[#F94C9B] transition-all duration-300 shadow-md inline-block"
                >
                    Back To Home
                </Link>
            </div>
        </div>
    </section>
  )
}

export default PagesM