import type { Metadata } from "next";
import { Nunito_Sans, Playfair_Display } from "next/font/google";
import { StyledComponentsRegistry } from "@/styles/StyledComponentsRegistry";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "In Loving Memory",
  description: "Memorial service details and remembrance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
