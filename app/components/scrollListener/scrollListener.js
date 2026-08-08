'use client';

import { useEffect, useState } from 'react';

const THRESHOLDS = [100, 300, 800, 1500, 2100, 2700, 3300, 4100];

const ScrollListener = () => {
  const [visible, setVisible] = useState(Array(THRESHOLDS.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      setVisible((prev) => {
        const next = THRESHOLDS.map((threshold) => scrollY > threshold);
        return next.some((value, i) => value !== prev[i]) ? next : prev;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return visible;
};

export default ScrollListener;
