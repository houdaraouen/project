import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <nav class="navbar background">
        <ul class="nav-list">
            {/* <div class="logo"> */}
                {/* <img src="logo.png"> */}
          
            <li><a href="#Courses">Courses</a></li>
            <li><a href="">Students</a></li>
            <li><a href="">Teachers</a></li>
            <li><a href="">login</a></li>
            <li><a href="">signup</a></li>
        </ul>
 
        <div class="rightNav">
            {/* <input type="text" name="search" id="search"> */}
            <button class="btn btn-sm">login</button>
        </div>
    </nav>
      <h1 className="home-title" >Welcome to school App</h1>
      <h2> excellence is our motto and path</h2>
    
      
      <img src='https://img.freepik.com/vecteurs-libre/enfants-uniforme-scolaire-ecole_1308-46223.jpg?w=740&t=st=1703462919~exp=1703463519~hmac=db88a28425f6d353ac773d065826f2ba4255b931749d6aab2d25f8b6f6cae6f6' className="home-image" alt='image'></img>
      <div className="button-container">
        
       </div>
    </div>
  );
};

export default Home;