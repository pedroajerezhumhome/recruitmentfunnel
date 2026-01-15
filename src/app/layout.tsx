import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HUM | Household Manager",
  description: "House Managers for entrepreneurial families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="mouseflow" strategy="afterInteractive">{`
          window._mfq = window._mfq || [];
          (function() {
            var mf = document.createElement("script");
            mf.type = "text/javascript"; mf.defer = true;
            mf.src = "//cdn.mouseflow.com/projects/4cd6aae8-538e-4882-8893-da78958f2b5a.js";
            document.getElementsByTagName("head")[0].appendChild(mf);
          })();
        `}</Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
