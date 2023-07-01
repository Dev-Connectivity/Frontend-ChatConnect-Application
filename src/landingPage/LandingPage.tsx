import React from 'react'
import TextField from '../components/atoms/textInput'
import Button from '../components/atoms/button'
import LandingPageImage from '../assets/images/LandingPage.svg'
import './LandingPage.css'

export const LandingPage = () => {
  return (
    <div className='main-wrapper'>
      <div className='image-container'>
      <img src={LandingPageImage} alt="Logo" />;
      </div>
      <div className='login-section'>
        <h1>Hi, Welcome Back! 👋</h1>
        <TextField type="email"/>
        <TextField type="password"/>
        <Button >Login</Button>
        <section>
          <Button>Login with Google</Button>
          <Button>Login with Facebook</Button>
        </section>
      </div>
    </div>
  )
}
