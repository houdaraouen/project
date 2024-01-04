import React, { useState } from 'react';
import "./Signup.css";
function Signup() {
  const [signupData, setSignupData] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const handleSignup = (event) => {
    event.preventDefault();
  
   
        setSignupData({
      userName: '',
      email: '',
      password: ''
    });
  };<br></br>

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={signupData.userName}
          onChange={(event) =>
            setSignupData({ ...signupData, userName: event.target.value })
          }
        /><br/>
        <input
          type="email"
          placeholder="Email"
          value={signupData.email}
          onChange={(event) =>
            setSignupData({ ...signupData, email: event.target.value })
          }
        /> <br/>
        <input
          type="password"
          placeholder="Password"
          value={signupData.password}
          onChange={(event) =>
            setSignupData({ ...signupData, password: event.target.value })
          }
        /><br/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;