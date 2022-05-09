import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, theme] = createTheme({
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});

export const exampleStyle = style({
  backgroundColor: theme.color.brand,
  fontFamily: theme.font.body,
  color: "white",
  padding: 10,
});
