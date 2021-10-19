import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#bd1936",
  primaryBright: "#a1021f",
  primaryDark: "#6e0114",
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
  input: "#eeeaf4",
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
  secondary: "#bd1936",
  background: "#c28282",
  backgroundDisabled: "#001b2d",
  contrast: "#FFFFFF",
  invertedContrast: "#46072e",
  input: "#001b2d",
  primaryDark: "#bd1936",
  tertiary: "#001b2d",
  text: "#bd1936",
  textwhite: "#bd1936",
  textDisabled: "#3c4e5a",
  textSubtle: "#bd1936",
  borderColor: "#c28282",
  card: "#46072e",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
