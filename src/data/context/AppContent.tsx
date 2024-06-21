import { createContext, useState } from "react";

type Theme = "dark" | "";

interface AppProviderProps {
  children?: any;
}

interface AppContextProps {
  theme?: Theme;
  alternatingTheme?: () => void;
}

const AppContent = createContext<AppContextProps>({});

export function AppProvider(props: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>("");

  function alternatingTheme() {
    setTheme(theme === "" ? "dark" : "");
  }

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
