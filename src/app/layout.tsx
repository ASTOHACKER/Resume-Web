import type { Metadata } from "next";
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
});

export const metadata: Metadata = {
  title: "Narudom O-kart // Editorial Archive",
  description: "Personal portfolio and technical archive of Narudom O-kart.",
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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
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
