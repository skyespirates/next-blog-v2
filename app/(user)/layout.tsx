import "../globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// components
import Header from "@/components/Header";
import Banner from "@/components/Banner";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`md:px-36 px-9 text-xl ${poppins.className}`}>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}