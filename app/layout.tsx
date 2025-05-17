import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "@/styles/globals/normalize.css";
import "@/styles/globals/globals.css";
import { ConfigProvider } from "antd";

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
      <body className={MontserratFont.variable}>
        <ConfigProvider
          theme={{
            token: { fontFamily: "var(--font-montserrat)" },
            components: {
              Menu: {
                colorSplit: "transparent",
                fontSize: 15,
                iconSize: 18,
                iconMarginInlineEnd: 12,
              },
              Breadcrumb: {
                fontSize: 20,
              },
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
