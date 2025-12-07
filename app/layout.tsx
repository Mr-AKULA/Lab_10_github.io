import type React from "react"
import type { Metadata, Viewport } from "next"
// import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// const _geist = Geist({ subsets: ["latin"] })
// const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "QR Generator - Генератор QR-кодов",
  description: "Создавайте собственные QR-коды с возможностью масштабирования и сохранения в PNG",
  generator: "Next.js",
  applicationName: "QR Generator",
  keywords: ["QR code", "генератор", "QR-код", "PNG", "скачать"],
  authors: [{ name: "QR Generator" }],
  icons: {
    icon: [
      {
        url: "/icons/windows11/Square44x44Logo.targetsize-16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/icons/windows11/Square44x44Logo.targetsize-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icons/android/android-launchericon-192-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/android/android-launchericon-512-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icons/ios/180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  themeColor: "#6ee7b7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/windows11/Square44x44Logo.targetsize-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/windows11/Square44x44Logo.targetsize-16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/ios/180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/ios/152.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/ios/120.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="QR Gen" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#141414" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
