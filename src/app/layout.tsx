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
  title: "Wildridge Tutoring | Private Tutoring in Brooklyn",
  description:
    "Private tutoring in Writing, English, Math, Science, and Test Prep for middle school, high school, and college students. University of Chicago graduate based in Brooklyn, NY.",
  openGraph: {
    title: "Wildridge Tutoring",
    description:
      "Private tutoring in Brooklyn for middle school, high school, and college students.",
    url: "https://wildridgetutoring.com",
    siteName: "Wildridge Tutoring",
    type: "website",
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
