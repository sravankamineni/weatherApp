import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './index.css';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <button onClick={toggleDarkMode} className="toggle-button">
            {darkMode ? <FaSun /> : <FaMoon />}
            {darkMode ? ' Light Mode' : ' Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
