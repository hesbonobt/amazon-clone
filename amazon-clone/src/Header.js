import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
const [{basket,user},dispatch]=useStateValue();

const handleAuthentication=()=>{
  if(user){
    auth.signOut();
  }
}

  
  return (
    <div className='header'>
      <Link to="/">
      <img 
      
        className="header__logo"
        src='data:image/png;base64,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'            
        alt='logo'
        />
      
      </Link>
     
     
        <div className="header__search">
          <input
          className="header__searchInput"
          type='text'
          />
          <SearchIcon className="header__searchIcon"/>
          {/*Logo*/}
        </div>

        <div className='header__nav'>
          <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>
            
              Hello {!user? 'Guest':user.email}
              
            </span>
            <span className="header__optionLineTwo">
              {
                user?'Sign Out':'Sign In'
              }
            </span>
          </div>
          </Link>
          
          
          <div className='header__option'>
            <span className='header__optionLineOne'>
              Returns
            </span>
            <span className="header__optionLineTwo">
              & Orders
            </span>
          </div>
          
          <div className='header__option'>
          <span className='header__optionLineOne'>
              Your
            </span>
            <span className="header__optionLineTwo">
              Prime
            </span>
          </div>
           
           <Link to="/checkout">
           <div className='header__optionBasket'>
            <ShoppingBasket/>
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
           </Link>
           
           
          
        </div>

        
    </div>
  )
}

export default Header