import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/provider/themeProvider";
import { ThemeContextProvider } from "@/context/ThemeContext";
import AuthProvider from "@/provider/authProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Sant Ralph Magazine - Trending in Sports, Health, Lifestyle, Entertainment, Technology, and History",
  description:
    "Explore the latest trends in sports, health, technology, lifestyle, and entertainment. Stay informed and entertained with our diverse range of articles on cutting-edge topics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Discover the latest trends in sports, health, lifestyle, entertainment, technology, and history with Sant Ralph Magazine. Stay informed and entertained with our diverse range of articles on cutting-edge topics."
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="Sant Ralph Magazine" />
        <meta
          property="og:description"
          content="Discover the latest trends in sports, health, lifestyle, entertainment, technology, and history with Sant Ralph Magazine. Stay informed and entertained with our diverse range of articles on cutting-edge topics."
        />
        <meta property="og:url" content="https://srmspot.com" />
        <meta
          name="facebook-domain-verification"
          content="5m2diplmnrqs8669t6edykd2rtcaoa"
        />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4048338451491396"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Header />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
