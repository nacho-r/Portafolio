import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://portafolioisaacromero.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Isaac Romero | QA Automation Engineer & Full Stack Developer",
    template: "%s | Isaac Romero",
  },
  description:
    "Portfolio de Isaac Romero, QA Automation Engineer y Full Stack Developer especializado en testing, automatización y desarrollo web.",
  keywords: [
    "Isaac Romero",
    "QA Automation",
    "SDET",
    "Full Stack Developer",
    "Testing API",
    "Playwright",
    "Selenium",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Isaac Romero | QA Automation Engineer & Full Stack Developer",
    description:
      "QA Automation Engineer y Full Stack Developer con experiencia en automatización, testing API, mobile y desarrollo web.",
    url: siteUrl,
    siteName: "Isaac Romero Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Isaac Romero portfolio preview",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Romero | QA Automation Engineer & Full Stack Developer",
    description:
      "QA Automation Engineer y Full Stack Developer con enfoque en calidad, automatización y desarrollo web.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
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
