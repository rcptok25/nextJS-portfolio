import { extendTheme, ThemeConfig, StyleFunctionProps } from "@chakra-ui/react";

const colorModeDefault = {
  light: {
    background: "#F0F2F5",
    text: "#898A8D",
    primary: "#03A9F4",
  },
  dark: {
    background: "#18191a",
    text: "#E4E6EB",
    primary: "#03A9F4",
  },
};

const lightMode = {
  container: "#FFFFFF",
  text: "#898A8D",
  title: "#050505",
};

const darkMode = {
  container: "#242526",
  text: "#58595c",
  title: "#e4e6eb",
};

const colors = {
  lightMode,
  darkMode,
  brand: {
    50: "#e3f2ff",
    100: "#b3daff",
    200: "#80c0ff",
    300: "#4da7ff",
    400: "#1a8eff",
    500: "#0076e6",
    600: "#005bb4",
    700: "#004182",
    800: "#002750",
    900: "#000e21",
  },
  succes: "#4CAF50",
  error: "#FF0000",
  warning: "#FFC107",
  info: "#2196F3",
  white: "#FFFFFF",
  black: "#000000",
  gray: "#999999",
  text: "#000000",
  tabGray: "#E6E8EB",
  transparent: "transparent",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const breakpoints = {
  xs: "30em",
  sm: "36em",
  md: "48em",
  lg: "64em",
  xl: "85em",
  "2xl": "96em",
};

const theme = extendTheme({
  config,
  breakpoints,
  colors: {
    ...colors,
    ...colorModeDefault,
    background: {
      light: colorModeDefault.light.background,
      dark: colorModeDefault.dark.background,
    },
    text: {
      light: colorModeDefault.light.text,
      dark: colorModeDefault.dark.text,
    },
    primary: {
      light: colorModeDefault.light.primary,
      dark: colorModeDefault.dark.primary,
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg:
          props.colorMode === "dark"
            ? colorModeDefault.dark.background
            : colorModeDefault.light.background,
        color:
          props.colorMode === "dark"
            ? colorModeDefault.dark.text
            : colorModeDefault.light.text,
      },
      root: {
        fontFamily: "body",
        fontWeight: "body",
      },
      spinner: {
        color: "secondary",
      },
    }),
  },
});

export default theme;
