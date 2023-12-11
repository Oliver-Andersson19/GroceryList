import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import fetchService from '../services/fetchService.js'
import cacheService from '../services/cacheService.js';

function LoginPage() {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const [msg, setMsg] = useState("")

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault()
    
    if (formData.username === "" || formData.password === "") return

    const response = await fetchService.fetchRes("auth/login", "POST", formData);
    
    if(response.ok) {
      const token = await response.json();
      cacheService.saveLocalValue("token", token);
      // setTimeout(() => navigate("/lista"), 2000);
      navigate("/lista")
    } else {
      // fix proper error msg
      const errorMsg = await response.json();
      setMsg(errorMsg.error)
    }
  }


  return (
    <div className='login-page-wrapper'>

      <form >
        <label>Konto:</label>
        <input
          type="text"
          onChange={(e) => setFormData({...formData, username: e.target.value})}
        />
        <label>Lösenord:</label>
        <input
          type="password"
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <p>{msg}</p>
        <button onClick={(e) => handleLogin(e)}>Logga in</button>
      </form>

    </div>
  )
}

export default LoginPage