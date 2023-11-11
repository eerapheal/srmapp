import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../provider/themeProvider"
import { ThemeContextProvider } from "../context/ThemeContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sant Ralph Magazine",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider >
          <ThemeProvider >
        <div className="container">
          <div className="wrapper">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
        </ThemeProvider >
        </ThemeContextProvider>
      </body>
    </html>
  );
}
