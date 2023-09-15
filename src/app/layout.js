"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, ...props }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={props.session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
