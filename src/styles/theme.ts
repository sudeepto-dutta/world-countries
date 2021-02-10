import { ChakraTheme, extendTheme, theme } from "@chakra-ui/react";
import customColors from "./colors";

const customTheme: ChakraTheme = extendTheme({
  ...theme,
  styles: {
    global: (props) => ({
      backgroundColor:
        props.colorMode === "dark"
          ? customColors.darkModeBackground
          : customColors.lightModeBackground,
      color:
        props.colorMode === "dark"
          ? customColors.darkModeText
          : customColors.lightModeText,
    }),
    body: {
      height: "100%",
      width: "100%",
      backgroundColor: "whitesmoke",
    },
  },
  components: {
    ...theme.components,
  },
  fonts: {
    ...theme.fonts,
    body: `-apple-system,system-ui,BlinkMacSystemFont,
            "Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,
    heading: `-apple-system,system-ui,BlinkMacSystemFont,
            "Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,
    mono: `-apple-system,system-ui,BlinkMacSystemFont,
            "Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,
  },
  fontSizes: {
    ...theme.fontSizes,
    xs: ".625rem", // ~10px
    sm: ".75rem", // ~12px
    md: ".875rem", // ~14px
    lg: "1.125rem", // ~18px
    xl: "1.5rem", // ~24px
    "2xl": "2rem", // ~32px
    "3xl": "3rem", // ~48px
  },
  colors: {
    ...theme.colors,
    ...customColors,
  },
});

export default customTheme;
