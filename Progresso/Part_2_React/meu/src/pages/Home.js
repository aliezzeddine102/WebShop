import React from 'react'
import Anuncio from '../components/Anuncio'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Productos from '../components/Productos'

import Slider from '../components/Slider'


export default function Home() {
  return (
    <div>
     
    <Slider/>
    <Categories/>
    <Productos/>
    <NewsLetter/>
    
   
    </div>
  )
}
