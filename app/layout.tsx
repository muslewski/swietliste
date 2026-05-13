import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Cormorant_Infant,
  Great_Vibes,
  EB_Garamond,
  Bodoni_Moda,
  Source_Serif_4,
  Inter,
  Jost,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import { MotionProvider } from "@/lib/motion-provider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-infant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Świetliste — Homepage explorations",
  description:
    "Ten different homepage directions for Świetliste — Fotografujemy emocje. Wedding photography, Osielsko / Bydgoszcz.",
};

const fontVariables = [
  playfair.variable,
  cormorantGaramond.variable,
  cormorantInfant.variable,
  greatVibes.variable,
  ebGaramond.variable,
  bodoni.variable,
  sourceSerif.variable,
  inter.variable,
  jost.variable,
  spaceGrotesk.variable,
  jetBrains.variable,
].join(" ");

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${fontVariables} font-sans antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
