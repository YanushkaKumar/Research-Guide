import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-sans" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});
const mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Quantum Build Lab | Advanced UI and Product Systems",
  description:
    "A high-concept digital studio delivering bold interface systems, conversion UX, and production-ready engineering.",
  metadataBase: new URL("https://final-year-ict-solutions.vercel.app"),
  openGraph: {
    title: "Quantum Build Lab | Advanced UI and Product Systems",
    description:
      "Distinctive UI direction fused with robust engineering for service businesses and product teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${cormorant.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
