import React, { useContext } from 'react'
import { ApiData } from './ContextApi'

const Banner = () => {
  let data = useContext(ApiData)
  console.log(data);
  
  
  return (
    <div className='py-20 bg-red-400'>Banner</div>
  )
}

export default Banner