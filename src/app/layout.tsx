import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isaac Romero | QA Automation Engineer & Full Stack Developer",
  description:
    "Portfolio de Isaac Romero, QA Automation Engineer y Full Stack Developer especializado en testing, automatización y desarrollo web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
