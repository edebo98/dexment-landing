
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const siteUrl = "https://dexment.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dexment — Powering projects, connecting expertise",
    template: "%s | Dexment",
  },
  description:
    "Dexment is a construction intelligence platform giving homeowners, contractors and developers real-time visibility into budgets, documents, approvals and progress.",
  keywords: [
    "construction management software",
    "construction budget tracking",
    "construction project management",
    "construction intelligence platform",
    "Dexment",
  ],
  authors: [{ name: "Dexment" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Dexment — Build With Confidence",
    description:
      "Complete visibility into your construction budget, documents, approvals and progress — all in one trusted workspace.",
    siteName: "Dexment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dexment — Build With Confidence",
    description:
      "Complete visibility into your construction budget, documents, approvals and progress — all in one trusted workspace.",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
