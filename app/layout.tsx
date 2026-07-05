import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deep Safe Lithium Energy | Solid-State Battery Technology",
  description:
    "Leading innovator in solid-state battery technology. Developing next-generation energy storage solutions for EVs, drones, robotics, and consumer electronics.",
  keywords: [
    "solid-state battery",
    "EV battery",
    "energy storage",
    "lithium battery",
    "next-generation battery",
    "drone battery",
  ],
  authors: [{ name: "Deep Safe Lithium Energy" }],
  openGraph: {
    title: "Deep Safe Lithium Energy | Solid-State Battery Technology",
    description:
      "Leading innovator in solid-state battery technology for the future of energy.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
