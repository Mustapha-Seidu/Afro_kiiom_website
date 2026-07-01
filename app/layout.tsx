import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import PublicShell from "@/components/PublicShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiiom — Innovation Rooted in Africa | Afro Kiiom Ltd",
  description:
    "Afro Kiiom Ltd is building Africa's first indigenous computer hardware from scratch, alongside world-class software products. Join us, invest, or collaborate.",
  keywords: ["African tech", "hardware innovation", "software", "Africa startup", "Kiiom", "Afro Kiiom"],
  openGraph: {
    title: "Kiiom — Innovation Rooted in Africa",
    description: "Building Africa's first computer hardware from scratch and world-class software.",
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
