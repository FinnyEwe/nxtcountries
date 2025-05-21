

import type { Metadata } from "next";
import { jsfin_sans } from '@/app/ui/fonts';
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Country API",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jsfin_sans.className}`}>
        <NavBar></NavBar>

        {children}
      </body>
    </html>
  );
}
