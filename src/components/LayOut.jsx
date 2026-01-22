import React from 'react'
import Heading from './Heading.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'
import BackToTopButton from './BackToTopButton.jsx'
import ChatWidget from './ChatWidget.jsx'

const LayOut = () => {
  return (
    <>
     <Heading></Heading>
     <Navbar></Navbar>
     <ChatWidget></ChatWidget>
     <BackToTopButton></BackToTopButton>
     <Outlet></Outlet>
     <Footer></Footer>
    </>
  )
}

export default LayOut