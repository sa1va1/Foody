import './App.scss'
import { useState } from 'react'
import Header  from './components/header/Header'
import Banner from './components/banner/Banner'
import FoodMenu from './components/FoodMenu/FoodMenu'
import Download from './components/DownloadApp/Download'
import About from './components/about/Customer'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <FoodMenu/>
      <Download/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
