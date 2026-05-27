import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLAGRANK — The World Rankings Game",
  description: "Can you pick the country metric that ranks best? A geography trivia game.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-white">{children}</body>
    </html>
  );
}
