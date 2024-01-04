import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "./Login.css"

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  //logic to redirect user to signup if he's not
  // const history = useHistory();
  // if (!hasSignedUp) {
  //   history.push("/signup");
  // } else {}
  
  const handleLogin = (event) => {
    event.preventDefault();
   
    setLoginData({
      email: '',
      password: ''
    });
    
  };
  


  return (
    <div>
      <h2>  Login  </h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(event) =>
            setLoginData({ ...loginData, email: event.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(event) =>
            setLoginData({ ...loginData, password: event.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;