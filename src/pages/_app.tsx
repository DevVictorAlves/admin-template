import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "../data/context/AppContent";
import { AuthProvider } from "../data/context/AuthContent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}
