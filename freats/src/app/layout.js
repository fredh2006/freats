import { Oswald, Quicksand, Noto_Serif } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald'
})

export const metadata = {
  title: "Freats",
  description: "A blog for all things food.",
  keywords: ["Blog", " Food", " University"],
  author: "Fred He",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className = {`${oswald.variable}`}>
      <link rel="icon" href="/logo.png" />
      <body>{children}</body>
    </html>
  );
}
