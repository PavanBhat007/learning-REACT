import React from 'react'

export default function ProfilePicture() {
    const imgUrl = './src/assets/profile.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return (
        <img 
            src={imgUrl} 
            onClick={(e) => handleClick(e)}>
        </img>
    );
}
