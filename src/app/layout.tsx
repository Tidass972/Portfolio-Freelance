import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { texturina } from "@/lib/fonts";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Développeur Web",
  description: "Portfolio professionnel d'un développeur web full-stack spécialisé en création de sites modernes et performants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${firaCode.variable} ${texturina.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
