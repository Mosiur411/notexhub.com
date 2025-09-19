import AOSInit from "./AOSInit";
import "./assets/styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import Navbar from "./components/sheard/common/navbar/Navbar";
import Footer from "./components/sheard/common/footer/Footer";
import SEOProvider from "@/utils/SEOProvider";
import Chat from "./components/ChatOpt/Chat";



const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <SEOProvider />
        <AOSInit />
        <div className="bg-[#111204]">
          <Navbar />
          <main className="container mx-auto 2xl:px-20 xl:px-10 px-2 z-[10]">
            {children}
            </main>
           <Chat/>
          <Footer />
        </div>
      </body>
    </html>
  );
}
