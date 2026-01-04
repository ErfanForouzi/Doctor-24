import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دکتر 24",
  description: "دستیابی به دکتر های خوب در دکتر 24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${vazirmatn.className}`} lang="fa" dir="rtl">
      <body>
                                     <header>this is header by erfan</header>
          {children}
      </body>
    </html>
  );
}
