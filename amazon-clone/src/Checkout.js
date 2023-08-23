import React from 'react';
import Header from './Header';
import Subtotal from './Subtotal';
import "./Checkout.css"
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
const [{basket,user},dispatch]=useStateValue();

  return (
    <div>
     <Header/>
    
    
    <div className='checkout'>
        
        <div className='checkout__left'>
            <img className='checkout__ad' src='https://img.freepik.com/free-vector/flat-design-shopping-center-design-template_23-2149321349.jpg?size=626&ext=jpg&ga=GA1.2.1085896092.1688291034&semt=ais' alt=''/>
            <div>
              <h3>Hello,{user?.email}</h3>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
               
                {
                  basket.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                  ))
                }
                
            </div>
        </div>
        <div className='checkout__right'>
            <Subtotal/>
            
        </div>
    </div>
    </div>
  )
}

export default Checkout