import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProviders from "@/providers/AuthProviders";
import { Bounce, ToastContainer } from "react-toastify";

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
        className={`lg:mt-8 ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <AuthProviders>
          <div className="lg:px-[150px]">
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
            <Navbar/>
            {children}
          </div>
          <Footer/>
      </AuthProviders>
      </body>
    </html>
  );
}
