import React from 'react';
import profilePic from "./assets/profile.jpg";

function Card() {
  return (
    <div className="card">
      <img className='card-img' src={profilePic} alt="profile picture" ></img>
      <h2 className='card-title' >Pavan Bhat</h2>
      <p className='card-text'>Gamer :)</p>
    </div>
  )
}

export default Card;
