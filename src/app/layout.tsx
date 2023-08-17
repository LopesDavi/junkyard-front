import "./globals.css";
import type { Metadata } from "next";
import { Lacquer } from "next/font/google";
import Provider from "./components/provider";

const lacquer = Lacquer({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Junkyard",
  description: "App fácil e prático para quem curte montar seus treinos e dietas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lacquer.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
