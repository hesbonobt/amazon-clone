import React, { useEffect } from 'react';
import './App.css';
import Home from './Home';
/*import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";*/
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51NWD6hCN2JZPqomSlF5uuXJ5AOaDdOT3DclmlRIjxQAZMWMq8e7iS47z7t2lGz9azeoTFzPJZYbBK1NwcvF9bebv00B3EahphT')


function App() {

  const [/*{basket}*/,dispatch]=useStateValue();

  useEffect(
    ()=>{
    //WILL Only run once when the app component loads
   const listen=onAuthStateChanged(auth,(authUser)=>{
      //console.log('The user is',authUser)
       if(authUser){
         //user just logged in / user was logged in
         dispatch({
           type:'SET_USER',
           user:authUser
         })
       }else{
         //the user is logged out
         dispatch({
           type:'SET_USER',
           user:null
         })
       }
    })
  return ()=>{listen();}
  },[]);

  const router = createBrowserRouter([
    {
     path:"/login",
     element:<Login/>
    },
    {
      path: "/",
      
      element: <Home/>,
    },
    
    {
      path:"/checkout",
      element:<Checkout/>
    },
    {
      path:"/payment",
      element:<Elements stripe={promise}>
        <Payment/>
      </Elements>
    }

  ]);

/*const router=createBrowserRouter(
  createRoutesFromElements(
    
  <Route>
    <Route path='/' element={<Home/>}></Route>
<Route path='/checkout' element={<Checkout/>}></Route>
  </Route>

  
    
  )
)*/

  return (
    
    <div className='app'>
      
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
