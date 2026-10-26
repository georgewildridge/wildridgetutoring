import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Wildridge Tutoring",
  description:
    "Private tutoring and college admissions advising for middle school, high school, and college students. University of Chicago graduate based in New York.",
  openGraph: {
    title: "Wildridge Tutoring",
    description:
      "Private tutoring and college admissions advising in New York.",
    url: "https://wildridgetutoring.com",
    siteName: "Wildridge Tutoring",
    type: "website",
    images: [
      {
        url: "https://wildridgetutoring.com/og",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
