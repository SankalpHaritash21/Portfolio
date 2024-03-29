import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sankalp Haritash",
  description: "Hi I am Sankalp Haritash this is my Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth select-none">
      <body className={`${inter.className} bg-background`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
