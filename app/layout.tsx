import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRIYA N SINGH – Portfolio",
  description: "Portfolio of Priya N Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
