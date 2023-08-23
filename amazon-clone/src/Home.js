import React from 'react';
import "./Home.css";
import Product from './Product';
import Header from "./Header";




function Home() {
  return (
   
    <div className='home'>
       
      <div className='home__container'>
      <Header/>
        
        <img
        className='home__image'
        src='https://m.media-amazon.com/images/I/814vuMu5eLL._SX3000_.jpg'
        alt=''
        />
        
        <div className='home__row'>
          <Product 
          id="345654"
          title='Atomic Habits'
          price={29.99}
          image="https://m.media-amazon.com/images/I/51B7kuFwQFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          rating={5}
          
          />
          <Product
          id="86758599"
          title='Iron Flame'
          price={34.90}
          image="https://m.media-amazon.com/images/I/A1bc9KkHtsL._AC_SY400_.jpg"
          rating={3}
          />
        </div>

        <div className='home__row'>
          <Product
          id="7447474"
          title='Wireless Bluetooth Headphones'
          price={19.76}
          image="https://images-na.ssl-images-amazon.com/images/I/61+bXoMHXQL._AC_UL320_SR320,320_.jpg"
          rating={4}
          />
          <Product
          id="88484437"
          title="SAMSUNG 55-inch glass-crystal TV"
          price={500}
          image="https://images-na.ssl-images-amazon.com/images/I/71bdeNqyARL._AC_UL320_SR320,320_.jpg"
          rating={5}
          />
          <Product
          id="64754874"
          title="Bicycle Nertz Playing Card Game, Multiplayer Solitaire "
          price={26.76}
          image="https://images-na.ssl-images-amazon.com/images/I/81oOk5xN0FL._AC_UL320_SR320,320_.jpg"
          rating={4}

          />
        </div>

        <div className='home__row'>
          <Product
          id="84737483"
          title="Best Sellers in Clothing, Shoes & Jewelry"
          price={24}
          image="https://m.media-amazon.com/images/I/71ej9uEjJGL._AC_SY400_.jpg"
          rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home;