import React, { useContext } from 'react'
import { ApiData } from './ContextApi'
import banImg from '../assets/image/bannerHome.png'

const Banner = () => {
  let data = useContext(ApiData)
  console.log(data);
  
  
  return (
    <>
      <section className='w-full'>
        <div className="">
          <img className='w-full object-cover' src={banImg} alt="banner" />
        </div>
      </section>
    </>
  )
}

export default Banner