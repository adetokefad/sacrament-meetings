import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sacrament Meeting Planner",
  description: "Manage and view sacrament meeting programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <main className="min-h-screen bg-gray-50">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
