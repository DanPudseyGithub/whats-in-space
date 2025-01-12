import type { Metadata } from "next";
import "./globals.css";
import "@styles/base.scss";

export const metadata: Metadata = {
  title: "What's in Space?",
  description:
    "A vanity project created by Dan Pudsey to expand his knowledge of Next.js, D3.js and the cosmos.",
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
