

import { Footer } from "@/components";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "BIO-CONFORT",
  description: "Generated by create Bio-confort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      
      <div className="px-0 sm:px-0 md:px-0 lg:px-40">
        
        {children}
      </div>
      <Footer />
    </main>
  );
}
