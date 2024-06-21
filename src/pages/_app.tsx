import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "../data/context/AppContent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
