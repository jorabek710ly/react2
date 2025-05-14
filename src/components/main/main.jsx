import React from 'react'
import Cotegory from '../cotegory/cotegory'
import Producst from '../products/products'
import About from '../about/about'
import Hero from '../hero/hero'

import "./main.css"

const Main = () => {
  return (
    <div>
      
      <Cotegory/>
      <Hero/>
      <Producst/>
      <About/>
    </div>
  )
}

export default Main