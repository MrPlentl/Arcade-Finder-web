import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Your standard Tailwind directives
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retro Game Library",
  description: "A collection of classic arcade titles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}