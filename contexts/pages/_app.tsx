import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import i18n from "../../utils/i18n";
import { useEffect, useState } from "react";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import HomeTemplate from "@/components/templates/HomeTemplate";

export default function App({ Component, pageProps }: AppProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <div
        className="d-flex flex-column min-vh-100"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <Navbar />
        <div className="flex-grow-2 flex-md-grow-1">
          {isAuthenticated ? (
            <HomeTemplate>
              <Component {...pageProps} />
            </HomeTemplate>
          ) : (
            <Component {...pageProps} />
          )}
        </div>
        <Footer />
      </div>
    </I18nextProvider>
  );
}
