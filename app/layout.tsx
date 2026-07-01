import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import PublicShell from "@/components/PublicShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiiom — Technology Company | Afro Kiiom Ltd",
  description:
    "Afro Kiiom Ltd builds world-class software products and conducts research toward designing its own computer hardware from the ground up. Based in Ghana.",
  keywords: ["hardware innovation", "software", "Ghana tech", "Kiiom", "Afro Kiiom", "indigenous CPU"],
  openGraph: {
    title: "Kiiom | Afro Kiiom Ltd",
    description: "Building our first indigenous computer hardware from scratch and world-class software products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body>
        <PublicShell>{children}</PublicShell>
      </body>
    </html>
  );
}
