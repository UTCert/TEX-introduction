import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { QueryClient } from "@tanstack/react-query";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  display: "block",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.texblabs.com/"),
  title: "TEX - Blockchain Solutions",
  description:
    "TEXblabs is revolutionary decentralized lending with personalized interest rates, exclusive company pools, and exciting airdrops. Transform your financial interactions today!",
  keywords:
    "decentralized lending, personalized interest rates, peer-to-peer lending, defi, crypto, blockchain, arbitrum, ethereum, digital lending, crypto lending, blockchain lending, smart contracts, financial technology, fintech, digital assets, lending platform, borrowing platform, yield farming, staking, liquidity pools, interest rates, financial services, blockchain technology, crypto rewards, decentralized applications, defi solutions, crypto investments, decentralized exchanges, crypto finance, blockchain solutions",
  authors: [{ name: "TEXblabs", url: "https://www.texblabs.com/" }],
  icons: "/logo2.svg",
  openGraph: {
    title: "TEXblabs - Revolutionary Decentralized Lending Protocol",
    description:
      "TEXblabs is revolutionary decentralized lending with personalized interest rates, exclusive company pools, and exciting airdrops. Transform your financial interactions today!",
    type: "website",
    locale: "en_US",
    url: "https://www.texblabs.com/",
    siteName: "TEXblabs",
  },
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className="scroll-smooth">
        <body className={montserrat.className}>
          {children}
          <GoogleAnalytics gaId="G-MK95TFT1EJ" />
        </body>
      </html>
    </>
  );
}
