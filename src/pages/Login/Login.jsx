import React , { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [sign_St, setSign_St] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  const user_auth = async (event)=>{
    event.preventDefault();
    setloading(true);
    if(sign_St==="Sign In"){
      await login(email, password);
    }
    else{
      await signup(name, email, password);
    }
    setloading(false);
  }

  return (
    loading?<div className="spinner">
      <img src={spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className='login-form'>
        <h1>{sign_St}</h1>
        {sign_St === "Sign Up" ? 
        <input type="text" placeholder='Your name' value={name} onChange={(e)=>{setName(e.target.value)}} /> :<></>}
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
        <button onClick={user_auth} type='submit'>{sign_St}</button>
        <div className='bot-form'>
          <div className='rem'>
            <input type="checkbox" name="" id="rem-me" />
            <p>remember me</p>
          </div>
          <a href="" className='help'>need help ?</a>
        </div>
        <div className='opt'>
          {sign_St === "Sign In"?
            <div className='sign'>New to Netfilx? <span onClick={() => {setSign_St("Sign Up")}}>Sign Up Now</span></div> 
            : <div className='sign'>Already have an account? <span onClick={() => {setSign_St("Sign In")}}>Sign in Now</span></div>}
        </div>
      </div>
    </div>
  )
}

export default Login