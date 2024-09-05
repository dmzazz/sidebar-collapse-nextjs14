"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

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

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSideBar = () => setIsOpen(!isOpen);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex">
          <div className={`${isOpen ? "w-[12%]" : "w-14"} duration-300`}>
            <Sidebar toggleSideBar={toggleSideBar} isOpen={isOpen} />
          </div>
          <div className="w-full">
            <Navbar toggleSideBar={toggleSideBar} isOpen={isOpen}/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
