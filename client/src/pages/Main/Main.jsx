import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer/Footer'

const Main = () => {
  return (
    <div className='dark:bg-darkBg bg-white font-kanit'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main