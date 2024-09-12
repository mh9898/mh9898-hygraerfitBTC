// Define a type `ThemeContextType` for the theme context. It consists of:
// 1. `colors`: An object of type `TColors` (representing the current theme's colors).

import {createContext, FC, useState} from 'react';
import Colors, {TColors} from '../utils/HYcolors';

// 2. `applyColors`: A function that takes a `TColors` object (new theme colors) and applies them.
type ThemeContextType = {
  colors: TColors;
  applyColors: (colors: TColors) => void;
};

// Creating the `ThemeContext` using React's `createContext` function.
// Initially, it is set to `null`, meaning the context has no default value when created.
// The context will later be populated by the `ThemeProvider`.
const ThemeContext = createContext<ThemeContextType | null>(null);

// Define the type `Props` for the `ThemeProvider` component.
// It includes an optional `children` property that represents the child components inside the provider.
type Props = {
  children?: React.ReactNode;
};

// `ThemeProvider` component provides the current theme (colors) and the ability to change the theme (applyColors) to its children.
// It accepts children as props, and it is typed as a functional component (`FC<Props>`).
const ThemeProvider: FC<Props> = ({children}) => {
  // Define the state `colors` that holds the current theme's color values.
  // The initial value is set to `Colors.light`, meaning the default theme is light mode.
  const [colors, setColors] = useState(Colors.light);

  // The `applyColors` function is responsible for updating the theme.
  // It takes a `TColors` object (new colors) as input and updates the `colors` state.
  const applyColors = (colorTheme: TColors) => {
    setColors(colorTheme);
  };

  return (
    // The `ThemeContext.Provider` makes the `applyColors` function and the current `colors` state
    // available to any child components that consume this context.
    <ThemeContext.Provider value={{applyColors, colors}}>
      {/* Render the children (any component wrapped inside `ThemeProvider`) */}
      {children}
    </ThemeContext.Provider>
  );
};

// Exporting both the `ThemeContext` and `ThemeProvider` so that they can be used in other parts of the application.
// `ThemeContext` will be used to access the context data (colors and applyColors),
// while `ThemeProvider` will wrap components that need access to the theme.
export {ThemeContext, ThemeProvider};
