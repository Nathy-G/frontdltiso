import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionAuthProvider from "./context/SessionAuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Login DLTCode ISO",
  description: "Create Login DLTCode ISO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <SessionAuthProvider >
        <body className={inter.className}>{children}</body>
      </SessionAuthProvider>
        
    </html>
  );
}
