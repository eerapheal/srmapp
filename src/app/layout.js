import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/provider/themeProvider"
import { ThemeContextProvider } from "@/context/ThemeContext";
import AuthProvider from "@/provider/authProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sant Ralph Magazine",
  description: "Explore the latest trends in sports, health, technology, lifestyle, and entertainment. Stay informed and entertained with our diverse range of articles on cutting-edge topics.",
  name: "keywords",
  content: "sports, health, technology, lifestyle, entertainment, trending topics, wellness, fitness, gadgets, fashion, culture, news, reviews",
  rel: "icon",
  href: "@/public/favicon.ico.png",
  property: "og:title",
  content: "Sant Ralph Magazine - Your Source for Diverse Content",
  property: "og:description",
  content: "Explore the latest trends in sports, health, technology, lifestyle, and entertainment. Stay informed and entertained with our diverse range of articles on cutting-edge topics.",
  property: "og:image",
  content: "image_url_here"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider >  
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
        </AuthProvider>
      </body>
    </html>
  );
}
