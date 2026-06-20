import type { Metadata } from "next";
import { Prompt, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const promptFont = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "นฤดม โอกาศ | Software Developer Portfolio & Resume",
  description: "เรซูเม่และพอร์ตโฟลิโอของ นฤดม โอกาศ (Narudom O-kart) นักศึกษาไอที มหาวิทยาลัยสงขลานครินทร์ ผู้หลงใหลในการเขียนโค้ดและพัฒนาเว็บแอปพลิเคชันด้วย Next.js, TypeScript, Supabase, และ MongoDB",
  keywords: ["นฤดม โอกาศ", "Narudom O-kart", "Software Developer", "Web Developer", "Next.js", "TypeScript", "พอร์ตโฟลิโอ", "เรซูเม่", "สมัครงาน", "ฝึกงาน", "Programmer", "PSU IT"],
  authors: [{ name: "นฤดม โอกาศ", url: "mailto:disasdrop@gmail.com" }],
  creator: "นฤดม โอกาศ",
  openGraph: {
    title: "นฤดม โอกาศ | Software Developer Portfolio",
    description: "นักศึกษาไอที มหาวิทยาลัยสงขลานครินทร์ ที่ชื่นชอบการพัฒนาเว็บแอปพลิเคชัน ค้นหาโอกาสในการฝึกงานตำแหน่ง Programmer / Developer",
    type: "website",
    locale: "th_TH",
  },
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

