import type { Metadata } from "next";
import { Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "700"],
  variable: "--font-barlow",
  subsets: ["latin"],
});

const bellefair = Bellefair({
  weight: ["400"],
  variable: "--font-bellefair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Explore the universe and discover new destinations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${bellefair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[url('/home/background-home-desktop.jpg')] bg-cover bg-no-repeat bg-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
