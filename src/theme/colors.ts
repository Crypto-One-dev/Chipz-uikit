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
  background: "#1b3a4f",
  backgroundDisabled: "#001b2d",
  contrast: "#FFFFFF",
  invertedContrast: "#001b2d",
  input: "#001b2d",
  primaryDark: "#bd1936",
  tertiary: "#001b2d",
  text: "#e2f4ff",
  textwhite: "#e2f4ff",
  textDisabled: "#3c4e5a",
  textSubtle: "#bbc8d0",
  borderColor: "#e2f4ff",
  card: "#00101b",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
