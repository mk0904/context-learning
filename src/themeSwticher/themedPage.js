import React, { useContext } from 'react';
import Header from './Header';
import './theme.css';

import { ThemeContext } from './themeContext'; // Updated import statement

export default function Page() {
    const themeValue = useContext(ThemeContext); // Updated useContext argument
    return (
        <div id="app" className={themeValue.theme}> {/* Updated className */}
            <Header />
            <article>
                <h2>React Context Learning</h2>
                <p>
                    Yo boys and girls, let's learn and understand React Context API.
                </p>
            </article>
        </div>
    );
}
