import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#FF720D",
  primaryBright: "#e66000",
  primaryDark: "#d95b00",
  secondary: "#7645D9",
  success: "#68CF29",
  warning: "#FFAB2D",
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

// export const lightColors: Colors = {
//   ...baseColors,
//   ...brandColors,
//   background: "#FFFFFF",
//   custom: "#FF0000",
//   test: "FF0000",
//   backgroundDisabled: "#FFFFFF",
//   contrast: "#FFFFFF",
//   invertedContrast: "#FFFFFF",
//   input: "#FFFFFF",
//   inputBorder: "#FFFFFF",
//   tertiary: "#FFFFFF",
//   text: "#FFFFFF",
//   textDisabled: "#FFFFFF",
//   textSubtle: "#FFFFFF",
//   borderColor: "#FFFFFF",
//   card: "#FFFFFF",
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
//   },
// };

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e9f1fd",
  background: "#1f2b46",
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

// export const darkColors: Colors = {
//   ...baseColors,
//   ...brandColors,
//   secondary: "FFFFFF",
//   background: "#83DCB7",
//   custom: "#FF0000",
//   test: "FF0000",
//   backgroundDisabled: "#FFFFFF",
//   contrast: "#FFFFFF",
//   invertedContrast: "#FFFFFF",
//   input: "#FFFFFF",
//   inputBorder: "#FFFFFF",
//   primaryDark: "#FFFFFF",
//   tertiary: "#FFFFFF",
//   text: "#FFFFFF",
//   textDisabled: "#FFFFFF",
//   textSubtle: "#FFFFFF",
//   borderColor: "#FFFFFF",
//   card: "#FFFFFF",
//   gradients: {
//     bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
//   },
// };