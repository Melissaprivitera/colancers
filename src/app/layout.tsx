import type { Metadata } from "next";
import "./globals.css";
import { Web3Provider } from "@/components/providers/Web3Provider";

// Import Google Fonts
import { Pacifico, Arimo } from 'next/font/google';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
});

const arimo = Arimo({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-arimo',
});

export const metadata: Metadata = {
  title: "CoLancers - Collaborative Freelancing",
  description: "Join collaborative service teams, get paid fairly, and build verified reputation using Web3 technology.",
  keywords: "freelancers, collaboration, web3, ENS, World ID, Flare, blockchain, reputation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-cream ${pacifico.variable} ${arimo.variable}`}>
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
