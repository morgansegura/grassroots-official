import { Big_Shoulders, Birthstone, Roboto } from "next/font/google";

export const fontBase = Roboto({
  variable: "--font-base",
  subsets: ["latin"],
  display: "swap",
});

export const fontHeading = Big_Shoulders({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const fontAlternate = Birthstone({
  variable: "--font-alternate",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
