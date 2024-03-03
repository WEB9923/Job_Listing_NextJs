import type { Metadata } from "next";
import {Raleway} from "next/font/google";
import "./globals.css";
import {NextFont} from "next/dist/compiled/@next/font";
import {ReactNode} from "react";
import Navbar from "@/components/shared/Navbar";
import {EdgeStoreProvider} from "@/lib/edgestore";
import Footer from "@/components/shared/Footer";

const RaleWay: NextFont = Raleway(
  { subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"]
});

export const metadata: Metadata = {
  title: "JL",
  description: "NextJs job-listing App",
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={RaleWay.className}>
        <EdgeStoreProvider>
          <Navbar/>
          {children}
          <Footer/>
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
