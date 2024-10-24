import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', "500", '600', '700', "800", "900"], // Optional: define weights you want to use
});

export const metadata = {
  title: "Car Doctor Pro",
  description: "Best Car Repairing Workshop in Dubai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme" className={inter.className}>
      <body
        className={`lg:mt-[50px] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
