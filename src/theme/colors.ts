import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ec4899", // color from app.chipz.io
  primaryBright: "#ec4899",
  primaryDark: "#ec4899",
  secondary: "#bd1936",
  success: "#bd1936",
  successalt: "#e2f4ff",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#001b2d",
  invertedContrast: "#FFFFFF",
  input: "rgb(17, 24, 39)",
  tertiary: "#EFF4F5",
  text: "#bd1936",
  textwhite: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#bd1936",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#0399f9",
  background: "#1c1726",
  backgroundDisabled: "#001b2d",
  contrast: "#FFFFFF",
  invertedContrast: "#40162b",
  input: "rgb(17, 24, 39)",
  primaryDark: "#0399f9",
  tertiary: "#001b2d",
  text: "#ffffff",
  textwhite: "#ffffff",
  textDisabled: "#3c4e5a",
  textSubtle: "#ffffff",
  borderColor: "#e2f4ff",
  card: "rgb(26, 32, 51)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
