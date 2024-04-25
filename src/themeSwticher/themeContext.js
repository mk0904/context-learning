import React from "react";

// Naming convention: PascalCase for components
const ThemeContext = React.createContext('light');

function ThemeProvider(props) {
     const [theme, setTheme] = React.useState('light');
     const children = props.children;

     const toggleTheme = () => {
          setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
     };

     return (
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
               {children}
          </ThemeContext.Provider>
     );
}

export { ThemeProvider, ThemeContext };
