import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header/header.component";

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
        <HeaderComponent/>
        {children}
      </body>
    </html>
  );
}
