import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Final Year Project Solutions for ICT Students",
  description:
    "Modern final year project solutions for ICT students across Machine Learning, Mobile App, Web App, and DevOps.",
  metadataBase: new URL("https://final-year-ict-solutions.vercel.app"),
  openGraph: {
    title: "Final Year Project Solutions for ICT Students",
    description:
      "Professional project services with startup-grade quality, confidentiality, and on-time delivery.",
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
      <body className={`${manrope.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
