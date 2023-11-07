import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "./components/context/ThemeContext";
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
        <div className="container">
          <div className="wrapper">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
