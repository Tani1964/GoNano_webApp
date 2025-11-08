import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { QuoteRequestOverlay } from "./components/QuoteRequestOverlay";
import { EstimateProvider } from "./contexts/EstimateContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gonano",
  description: "Gonano",
  icons: {
    icon: "/images/logo.png", // Remove '../public' - paths are relative to public folder
    // Optional: add multiple sizes
    // icon: [
    //   { url: "/images/logo-16x16.png", sizes: "16x16", type: "image/png" },
    //   { url: "/images/logo-32x32.png", sizes: "32x32", type: "image/png" },
    // ],
    // apple: "/images/apple-touch-icon.png", // For iOS
    // shortcut: "/images/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        suppressHydrationWarning
      >
        <EstimateProvider>
          <Nav/>
          <main className="min-h-screen bg-background text-foreground mx-5 overflow-clip">
            {children}
          </main>
          <Footer/>
          <QuoteRequestOverlay />
        </EstimateProvider>
      </body>
    </html>
  );
}