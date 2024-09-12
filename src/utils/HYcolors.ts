// Defining a custom type `ColorTheme` that represents a color theme with four properties:
// `primary`, `secondary`, `textPrimary`, and `textSecondary`, all of which are strings representing color codes.
export type ColorTheme = {
  primary: string;
  secondary: string;
  textSecondary: string;
  textPrimary: string;
};

// `sharedColors` is an object that holds common colors used across themes.
// In this case, black and white are shared between the light and dark themes.
const sharedColors = {
  black: '#000000', // Black color code
  white: '#FFFFFF', // White color code
};

// `SharedColors` is a type that is automatically derived from the `sharedColors` object.
// It will have the same shape as `sharedColors`, ensuring the correct types for black and white.
type SharedColors = typeof sharedColors;

// `TColors` is a type that combines the properties of `ColorTheme` and `SharedColors`.
// This means any color theme will have both the `primary`, `secondary`, etc. from `ColorTheme`
// and `black`, `white` from `sharedColors`.
export type TColors = ColorTheme & SharedColors;

// `ColorPalettes` is a type that defines two color palettes: one for `light` mode and one for `dark` mode.
// Each mode (light and dark) will have a set of colors defined by the `TColors` type.
type ColorPalettes = {
  light: TColors; // Light theme colors
  dark: TColors; // Dark theme colors
};

// `Colors` is an object that implements the `ColorPalettes` type, defining actual colors for light and dark themes.
const HYcolors: ColorPalettes = {
  // Dark mode color palette
  dark: {
    primary: '#080811', // Dark background color
    secondary: '#161629', // Dark secondary background color
    textPrimary: sharedColors.white, // White text color (from `sharedColors`)
    textSecondary: '#67686E', // Grayish color for secondary text
    ...sharedColors, // Spread operator to include black and white from `sharedColors`
  },
  // Light mode color palette
  light: {
    primary: '#F8F8F8', // Light background color
    secondary: '#E4E4E4', // Light secondary background color
    textPrimary: '#161629', // Dark text color (contrasting the light background)
    textSecondary: '#9D5DB0', // Purple color for secondary text
    ...sharedColors, // Spread operator to include black and white from `sharedColors`
  },
};

// Exporting the `Colors` object to be used in other parts of the app.
// This will allow you to access both light and dark color palettes based on the theme.
export default HYcolors;
