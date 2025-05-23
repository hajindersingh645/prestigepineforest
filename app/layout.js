import {
  Open_Sans,
  Mooli,
  Playfair_Display,
  Montserrat,
} from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/style/globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-open_sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-Playfair_display",
  weight: ["400", "500", "600", "700", "800"],
});

const mooli = Mooli({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-mooli",
  weight: ["400"],
});

export const metadata = {
  title: "Prestige Pine Forest | Whitefield Bangalore",
  description:
    "Prestige Pine Forest | Nestled in the serene surroundings of Whitefield, Bangalore, Prestige Pine Forest offers a modern and luxurious living experience. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="AW-16705289191" />

      <body className={`${montserrat.variable}  ${openSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
