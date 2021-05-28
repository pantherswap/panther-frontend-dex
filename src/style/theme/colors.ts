import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#00A4A5",
  primaryBright: "#00E8E8",
  primaryDark: "#005C5C",
  secondary: "#2F7575",
  success: "#00DB5F",
  warning: "#E0385F",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#cccccc",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#FF720D",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};
export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e9f1fd",
  background: "#f0f0f0",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#0a0e17",
  input: "#483f3b",
  inputBorder: "#cccccc",
  primaryDark: "#d95b00",
  tertiary: "#2d2f37",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FF720D",
  borderColor: "#524B63",
  card: "#121827",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};