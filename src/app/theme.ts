import { extendTheme, ThemeConfig, StyleFunctionProps } from "@chakra-ui/react";

const colors = {
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
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: props.colorMode === "dark" ? "black" : "white",
      color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
    },
  }),
};

const theme = extendTheme({
  config,
  colors,
  styles,
});

export default theme;
