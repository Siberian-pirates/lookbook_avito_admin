import "@ant-design/v5-patch-for-react-19";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "@/styles/globals/normalize.css";
import "@/styles/globals/globals.css";
import { AntdProvider } from "@/components";

const MontserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LookBook avito admin panel",
  description: "LookBook avito admin panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AntdProvider>
        <body className={MontserratFont.variable}>{children}</body>
      </AntdProvider>
    </html>
  );
}
