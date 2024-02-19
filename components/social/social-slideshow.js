'use client';

import { useEffect, useState } from 'react';
import Card from './card';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const social = [
    {card:<Card href='https://github.com/KZ211' icon={<SiGithub size={100} className='transition-all duration-300 ease-in-out hover:size-20'/>} text='GitHub'/>},
    {card:<Card href='https://www.linkedin.com/in/alexis-jares-b70857235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' icon={<SiLinkedin size={100} className='transition-all duration-300 ease-in-out hover:size-20'/>} text='LinkedIn'/>},    
]

export default function SocialSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < social.length - 1 ? prevIndex + 1 : 0
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-row text-white justify-center items-center'>
      {social.map((social, index) => (
        <div key={index}
        className={`social-card transition-opacity duration-500 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-50'
          }`}
        >{social.card}</div>
      ))}
    </div>
  );
}