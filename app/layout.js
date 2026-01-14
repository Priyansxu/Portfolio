import "./globals.css";
import { Outfit, Space_Mono, Homemade_Apple } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/Theme";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
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

export const metadata = {
  title: "Priyanshu Gupta",
  description: "Developer // Graphics designer",
  alternates: {
    canonical: "https://priyanshu.js.cool/",
  },
  openGraph: {
    type: "website",
    url: "https://priyanshu.js.cool/",
    title: "Priyanshu Gupta",
    description: "Developer // Designer",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@priyansxu_gupta",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${outfit.variable} ${spaceMono.variable} ${homemadeApple.variable}`}
    >
      <body className="bg-[#fffdfd] dark:bg-[#242424] overflow-x-hidden">
        <ThemeProvider>
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}