"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps as NextThemeProviderProps } from "next-themes";

interface ThemeProviderProps extends Omit<NextThemeProviderProps, "children"> {
  children: React.ReactNode;
}

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
} 