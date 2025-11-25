import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Lead Syncer - Powerful CRM for Modern Sales Teams",
  description: "Lead Syncer helps you manage leads, track pipeline, and close deals faster. Try our free CRM today.",
  keywords: "CRM, sales management, lead tracking, pipeline management",
  openGraph: {
    title: "Lead Syncer - Powerful CRM for Modern Sales Teams",
    description: "Lead Syncer helps you manage leads, track pipeline, and close deals faster. Try our free CRM today.",
    url: "https://leadsyncer.com",
    siteName: "Lead Syncer",
    images: [{ url: "/og-image.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Syncer - Powerful CRM for Modern Sales Teams",
    description: "Lead Syncer helps you manage leads, track pipeline, and close deals faster. Try our free CRM today.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#3B82F6",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
