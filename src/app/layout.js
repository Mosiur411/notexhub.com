import AOSInit from "./AOSInit";
import "./assets/styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import Navbar from "./components/sheard/common/navbar/Navbar";
import Footer from "./components/sheard/common/footer/Footer";
import SEOProvider from "@/utils/SEOProvider";
import Chat from "./components/ChatOpt/Chat";
import Head from "next/head";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Notex – Trusted Software Development & Digital Partner</title>
        <meta
          name="description"
          content="Notex is your trusted partner for custom software, web, mobile apps, and AI-powered digital transformation solutions."
        />
        <meta
          name="keywords"
          content="Notex, software development, web development, mobile app development, AI solutions, digital transformation, Bangladesh tech company"
        />
        <meta name="author" content="Notex" />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-adsense-account"
          content="ca-pub-4626814401175279"
        ></meta>
      </Head>
      <body className={spaceGrotesk.className}>
        <SEOProvider />
        <AOSInit />
        <div className="bg-[#111204]">
          <Navbar />
          <main className="container mx-auto 2xl:px-20 xl:px-10 px-2 z-[10]">
            {children}
          </main>
          <Chat />
          <Footer />
        </div>
      </body>
    </html>
  );
}
