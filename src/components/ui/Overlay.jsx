'use client';
import React, { useEffect } from 'react';

const Overlay = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  return (
    <div className='w-full'>{children}</div>
  );
};

export default Overlay;
