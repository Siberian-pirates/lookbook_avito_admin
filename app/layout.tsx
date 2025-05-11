import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
