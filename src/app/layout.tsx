import type { Metadata, Viewport } from "next";
import { Prompt, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ArchivalLog from "@/components/ArchivalLog";
import RootLayoutWrapper from "./RootLayoutWrapper";

const promptFont = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["400", "600"],
});

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://resume-web-one-sigma.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Narudom O-kart // Editorial Archive",
    template: "%s // Narudom O-kart",
  },
  description:
    "Personal portfolio and technical archive of Narudom O-kart — Software Developer, IT PSU. Next.js, Supabase, AI-assisted engineering.",
  keywords: [
    "Narudom O-kart",
    "Software Developer",
    "Portfolio",
    "Next.js",
    "Supabase",
    "Resume",
    "IT PSU",
  ],
  authors: [{ name: "Narudom O-kart", url: siteUrl }],
  creator: "Narudom O-kart",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteUrl,
    siteName: "Narudom O-kart // Editorial Archive",
    title: "Narudom O-kart // Editorial Archive",
    description:
      "Typography-driven, engineering-first portfolio. Next.js 16, Tailwind v4, TS-Strict.",
    images: [
      {
        url: "/profile.webp",
        width: 1200,
        height: 630,
        alt: "Narudom O-kart — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Narudom O-kart // Editorial Archive",
    description:
      "Personal portfolio and technical archive of Narudom O-kart.",
    images: ["/profile.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${promptFont.variable} ${outfitFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-zinc-900 focus:text-white focus:px-4 focus:py-2 focus:text-xs focus:font-mono"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <RootLayoutWrapper>
            {children}
            <ArchivalLog />
          </RootLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
