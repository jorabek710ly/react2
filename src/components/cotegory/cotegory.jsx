import React from 'react'
import "./cotegory.css"
import { CATEGORY } from '../../static'
const Cotegory = () => {
  console.log(CATEGORY);
  
  return (
    <>
      <div className='container wrapper'>
        {
          CATEGORY?.map((laylo) =>(
            <div key={laylo.id} className='item'>
              <div className='laylo__img'>
                <img className='img' src={laylo.img} alt="" />
              </div>
              <div  className='laylo__body'>
                <p>{laylo.title}</p>
                <p>{laylo.desc}</p>
              </div>
            </div>

          ))
        }
      </div>
    </>
  )
}

export default Cotegory