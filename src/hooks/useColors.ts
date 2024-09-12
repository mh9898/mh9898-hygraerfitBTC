// Define an interface `ColorType` that describes the structure of the theme data.
// The `colors` property holds the current color theme (of type `TColors`),

import {useContext} from 'react';
import {TColors} from '../utils/HYcolors';
import {ThemeContext} from '../context/ThemeContext';

// and `applyColors` is a function that updates the colors.
interface ColorType {
  HYcolors: TColors; // Current theme colors (light, dark, etc.)
  applyColors: (colors: TColors) => void; // Function to update the color theme
}

// Custom hook `useColors` that provides an easy way to access the `colors` and `applyColors` from `ThemeContext`.
const useColors = (): ColorType => {
  // Access the theme data (store) from the `ThemeContext` using `useContext`.
  const store = useContext(ThemeContext);

  // If the context is `null` or not available, throw an error.
  // This ensures that `useColors` is used only within a `ThemeProvider`.
  if (!store) {
    throw new Error('useColors must be defined within a ThemeProvider.');
  }

  // Return the `applyColors` function and the `colors` from the context (store).
  // This makes it easy for components to use the current theme and update it if needed.
  return {
    applyColors: store.applyColors,
    HYcolors: store.colors,
  };
};

// Export the `useColors` hook so it can be used in other components to access theme data.
export default useColors;
