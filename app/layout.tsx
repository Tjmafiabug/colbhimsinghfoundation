import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import HomeNav from "@/components/home-nav";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Col. Bhim Singh Foundation",
    template: "%s | Col. Bhim Singh Foundation",
  },
  description:
    "The Col. Bhim Singh Foundation works to uplift rural communities in Haryana through anti-drug campaigns, healthcare, education, and heritage preservation. Founded by Vikram Bhim Singh, Tohana.",
  keywords: ["Col. Bhim Singh Foundation", "NGO Haryana", "Tohana", "anti-drug campaign", "Fatehabad"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Col. Bhim Singh Foundation",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-display antialiased bg-cream text-void">
        <HomeNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
