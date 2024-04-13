import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="flex text-center justify-center content-center bg-[#112226] 
          min-h-screen text-3xl text-[#F2C53D] font-extrabold"
        >
          <div className="mt-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
