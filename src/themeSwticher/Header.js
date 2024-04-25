import React, { useContext } from 'react';
import { ThemeContext } from './themeContext'; // Import ThemeContext

export default function Header() {
    const { toggleTheme } = useContext(ThemeContext); // Access toggleTheme from context

    return (
        <header>
            <h1>Demo Website</h1>
            <button onClick={toggleTheme}>Toggle Theme</button> {/* Button with onClick handler */}
        </header>
    );
}
