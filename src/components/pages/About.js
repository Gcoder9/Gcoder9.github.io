import React from 'react';
import image from '../images/linkPic.jpg';
export default function About() {
  return (
    
    <div>
      <h2>About Me</h2>
      <img src={image} alt= "Me" height={100} width={100} />
      <p>
      Attended UNCC full-stack coding Bootcamp. Developed a strong foundation in software engineering and coding principles across multiple platforms. Able to quickly Learn and master new technologies; successful working in both team and self-directed settings.
      </p>
    </div>
  );
}
