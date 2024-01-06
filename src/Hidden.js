import React, { useEffect } from 'react';

const Alert = () => {
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (windowHeight + scrollTop >= documentHeight) {
        alert('Было ли интересно,жду заказик🤗❤');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default Alert;
