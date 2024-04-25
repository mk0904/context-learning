import React from 'react';
import { ThemeProvider } from './themeSwticher/themeContext'; // Import ThemeProvider
import ThemePage from './themeSwticher/themedPage';

function App() {
    return (
        <div>
            <ThemeProvider>
                <ThemePage />
            </ThemeProvider>
        </div>
    );
}

export default App;
