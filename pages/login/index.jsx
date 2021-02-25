import React from 'react'
import style from './login.module.css'
import { useState } from 'react';

function Login() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


  const handleEmail = (event) => {
    setemail(event.target.value);
  }

  const handlePassword = (event) => {
    setpassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email id", email, "password", password);
  }


  return (
    <div className={style.loginBox}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className={style.displayBlock}>Email</label>
        <input type="text" className={style.displayBlock} value={email} onChange={handleEmail} />
        <label htmlFor="password" className={style.displayBlock}>Password</label>
        <input type="password" className={style.displayBlock} value={password} onChange={handlePassword} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
