import { darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: darkColors.card,
  boxShadow: "",
  boxShadowActive: "",
  boxShadowSuccess: "",
  boxShadowWarning: "",
  cardHeaderBackground: "",
  dropShadow: "",
};

export const dark: CardTheme = {
  background: darkColors.card,
  boxShadow: "rgb(0 0 0) 0px 40px 60px -50px",
  boxShadowActive: "",
  boxShadowSuccess: "",
  boxShadowWarning: "",
  cardHeaderBackground: "",
  dropShadow: "",
};
