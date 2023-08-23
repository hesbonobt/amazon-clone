import React,{useState} from 'react';
import "./Login.css";
import { Link, useNavigate} from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';


function Login() {
  const navigate=useNavigate();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const signIn = e =>{
  e.preventDefault();
  signInWithEmailAndPassword(auth,email,password)
  .then((userCredentials)=>{
    //console.log(userCredentials)
     navigate("/")
   })
  .catch((error)=>{console.log(error)})

  //some fancy firebase  shiit 
}

const register = e =>{
  e.preventDefault();
  
  
  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredentials)=>{
    //successifully created a new user with emailand password
    //console.log(userCredentials)
    if(userCredentials){
      navigate('/') }
  })
  .catch(error=>alert(error.message))

  
  }
  //do some fancy firebase register shiit




  return (
    <div className='login'>
        <Link to="/">
        <img className='login__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'            
        alt=''
      />
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
            </form>

            <p>
                By signing-in you agree to The AMAZON CLONE
                Conditions of Use & Sale. Please see our
                Privacy Notice, our Cookies Notice and our
                Interest-Based Ads 
                Notice.
            </p>

            <button className='login__registerButton' onClick={register}>Create Your Amazon Account</button>
        </div>
      
    </div>
  )
}

export default Login