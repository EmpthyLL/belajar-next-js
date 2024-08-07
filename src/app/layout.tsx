import type { Metadata } from "next";
import { Gupter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Gupter({weight:'400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is Main description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header name="Howard" age='23' job='haaa'>Saku</Header>
        <Header name="Jerry" age='19' job='yaaa'>Rata</Header>
        <h1>Dukung Legalisasi Ganja!</h1>
        {children}
      </body>
    </html>
  );
}
