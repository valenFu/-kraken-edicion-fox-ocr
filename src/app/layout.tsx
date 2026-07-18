import type { Metadata } from "next";
import "./globals.css";
import BackgroundEffects from "@/components/BackgroundEffects";

export const metadata: Metadata = {
  title: "Kraken Edición Fox OCR - Carrera Nocturna de Obstáculos",
  description: "Carrera nocturna de obstáculos en Villa de Soto, Córdoba. 8K y 4K. 5 de Diciembre 2026. Enfrenta el desafío.",
  keywords: ["OCR", "carrera", "obstáculos", "Kraken", "Fox", "Villa de Soto", "Córdoba"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen text-foreground antialiased">
        <div className="bg-texture" />
        <BackgroundEffects />
        {children}
      </body>
    </html>
  );
}
