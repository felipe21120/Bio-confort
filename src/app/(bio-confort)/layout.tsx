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
      <div className="bg-[#9EAD39] w-full h-4"></div>
      <div className="px-0 sm:px-0 md:px-0 lg:px-0">
        {children}
      </div>
    </main>
  );
}
