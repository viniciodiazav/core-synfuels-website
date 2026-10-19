import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Core Synfuels | Industrial Consulting & Project Development",
  description:
    "Core Synfuels structures industrial projects, connects technical capabilities, and advises cross-border opportunities between Texas, USA and Mexico.",
  keywords: [
    "Core Synfuels",
    "Industrial Consulting",
    "Project Development",
    "Energy Transition",
    "Oil & Gas",
    "Minerals",
    "Recycling",
    "Industrial Technology",
    "Manufacturing",
    "Texas",
    "Mexico",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-navy-900 min-h-screen selection:bg-forest-100 selection:text-forest-900`}>
        {children}
      </body>
    </html>
  );
}
