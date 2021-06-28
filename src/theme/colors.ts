import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#E79617",
  primaryBright: "#2E1E04",
  primaryDark: "#E79617",
  secondary: "#2E1E04",
  success: "#EAE9E6",
  warning: "#F0B909",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FCECD3",
  backgroundDisabled: "#FCECD3",
  contrast: "#231809",
  invertedContrast: "#FFFFFF",
  input: "#F5D5A1",
  tertiary: "#EFF4F5",
  text: "#34250F",
  textDisabled: "#BDC2C4",
  textSubtle: "#473825",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#E79617",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#231809",
  input: "#B87811",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE9E6",
  textDisabled: "#666171",
  textSubtle: "#D2D1CF",
  borderColor: "#473825",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
