import React from 'react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? '' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    let btn = document.querySelector("button");
    btn.innerText = `${currentTheme === 'dark' ? 'Dark' : 'Light'} Mode`;
  };

  return (
    <button className='toggleBtn' onClick={toggleTheme}>
      Theme
    </button>
  );
};

export default ThemeToggle;
