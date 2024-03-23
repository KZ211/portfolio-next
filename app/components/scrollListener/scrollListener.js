'use client';

import React, { useEffect, useState } from 'react';

const ScrollListener = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = 100;

      setIsVisible(scrollY > threshold ? true : false);
      setIsVisible1(scrollY > (threshold + 200) ? true : false);
      setIsVisible2(scrollY > (threshold + 700) ? true : false);
      setIsVisible3(scrollY > (threshold + 1400) ? true : false);
      setIsVisible4(scrollY > (threshold + 2000) ? true : false);
      setIsVisible5(scrollY > (threshold + 2600) ? true : false);
      setIsVisible6(scrollY > (threshold + 3200) ? true : false);
      setIsVisible7(scrollY > (threshold + 4000) ? true : false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Método para verificar los valores de isVisible
  const checkVisibility = () => {
    return {
      isVisible,
      isVisible1,
      isVisible2,
      isVisible3,
      isVisible4,
      isVisible5,
      isVisible6,
      isVisible7
    };
  };

  return checkVisibility;
};

export default ScrollListener;
