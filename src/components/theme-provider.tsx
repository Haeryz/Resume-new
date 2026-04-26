"use client";

import * as React from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: Theme;
  setTheme: (theme: Theme | string) => void;
};

const ThemeContext = React.createContext<ThemeContextValue>({
  theme: "dark",
  resolvedTheme: "dark",
  setTheme: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: "class";
  defaultTheme?: Theme;
  disableTransitionOnChange?: boolean;
};

const STORAGE_KEY = "theme";

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);

  const applyTheme = React.useCallback(
    (nextTheme: Theme) => {
      const root = document.documentElement;
      let cleanup: (() => void) | undefined;

      if (disableTransitionOnChange) {
        const style = document.createElement("style");
        style.appendChild(
          document.createTextNode(
            "*{transition:none!important;-webkit-transition:none!important}"
          )
        );
        document.head.appendChild(style);
        cleanup = () => {
          window.getComputedStyle(document.body);
          setTimeout(() => document.head.removeChild(style), 1);
        };
      }

      root.classList.toggle("dark", nextTheme === "dark");
      root.style.colorScheme = nextTheme;
      cleanup?.();
    },
    [disableTransitionOnChange]
  );

  React.useLayoutEffect(() => {
    const storedTheme =
      typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null;
    const initialTheme = storedTheme === "light" ? "light" : defaultTheme;
    setThemeState(initialTheme);
    applyTheme(initialTheme);
  }, [applyTheme, defaultTheme]);

  const setTheme = React.useCallback(
    (nextTheme: Theme | string) => {
      const normalizedTheme = nextTheme === "light" ? "light" : "dark";
      setThemeState(normalizedTheme);
      window.localStorage.setItem(STORAGE_KEY, normalizedTheme);
      applyTheme(normalizedTheme);
    },
    [applyTheme]
  );

  const value = React.useMemo(
    () => ({
      theme,
      resolvedTheme: theme,
      setTheme,
    }),
    [setTheme, theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
