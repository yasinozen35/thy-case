import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutPropsType } from "@/utils/types/commonTypes";
import { FlightProvider } from "@/contexts/FlightContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turkish Airlines",
  description: "Turkish Airlines case app",
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<LayoutPropsType>) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <FlightProvider>{children}</FlightProvider>
      </body>
    </html>
  );
}
