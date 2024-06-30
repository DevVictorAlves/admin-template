import { createContext, useEffect, useState } from "react";

interface AppProviderProps {
  children?: any;
}

interface AppContextProps {
  theme?: string;
  alternatingTheme?: () => void;
}

const AppContent = createContext<AppContextProps>({});

export function AppProvider(props: AppProviderProps) {
  const [theme, setTheme] = useState("");

  function alternatingTheme() {
    const themeValue = theme === "" ? "dark" : "";
    setTheme(themeValue);
    localStorage.setItem("theme", themeValue);
  }

  useEffect(() => {
    const themeSaved = localStorage.getItem("theme") as string;
    setTheme(themeSaved);
  }, []);

  return (
    <AppContent.Provider
      value={{
        theme,
        alternatingTheme,
      }}
    >
      {props.children}
    </AppContent.Provider>
  );
}

export default AppContent;
export const AppConsumer = AppContent.Consumer;
