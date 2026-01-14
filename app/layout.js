import "./globals.css";
import { Outfit, Lexend_Deca, Space_Mono, Homemade_Apple, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/Theme";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-deca",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const homemadeApple = Homemade_Apple({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-app",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Priyanshu Gupta",
  description: "Developer // Graphics designer",
  authors: [{ name: "Priyanshu Gupta" }],
  creator: "Priyanshu Gupta",
  publisher: "Priyanshu Gupta",
  metadataBase: new URL("https://priyanshu.js.cool"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://priyanshu.js.cool/",
    title: "Priyanshu Gupta",
    description: "Developer // Designer",
    siteName: "Priyanshu Gupta",
  },
  twitter: {
    card: "summary_large_image",
    site: "@priyansxu_gupta",
    creator: "@priyansxu_gupta",
    title: "Priyanshu Gupta",
    description: "Developer // Designer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${outfit.variable} ${lexendDeca.variable} ${spaceMono.variable} ${homemadeApple.variable} ${inter.variable}`}
    >
      <body className="back font-out mx-auto bg-[#fffdfd] dark:bg-[#242424] overflow-x-hidden">
        <ThemeProvider>
          <main className="land relative z-10">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}