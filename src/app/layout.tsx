import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";

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
        <HeaderComponent />
        <main>
          {children}
        </main>
        <p className="tagline">
          نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
        </p>
        <FooterComponent />
      </body>
    </html>
  );
}
