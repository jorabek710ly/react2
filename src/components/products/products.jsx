import { PRODUCTS } from '../../static'
import './products.css'
const Producst = () => {
  console.log(PRODUCTS);
  
  return (
    <>
      <div className='container wrapper'>
        {
          PRODUCTS?.map((product) =>(
            <div key={product.id} className='item_pro'>
              <div className='product__img'>
                <img className='imgg' src={product.img} alt="" />
              </div>
              <div  className='product__body'>
                <p>{product.title}</p>
                <img src={product.desc} alt="" />
                <p>{product.desce}</p>
              </div>
            </div>

          ))
        }
      </div>
    </>
  )
}

export default Producst 