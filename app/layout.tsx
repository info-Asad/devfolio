import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import AnalyticsProvider from '@/components/providers/AnalyticsProvider'
import { profile } from '@/config/profile';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: profile.title,
  description: 'Personal portfolio of Muhammad Asad, an AI & Web Automation Developer specializing in Flowise AI, chatbots, and no-code solutions.',
  icons: {
    icon:"https://raw.githubusercontent.com/info-Asad/info-Asad/refs/heads/main/download%20(3).png" 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased min-h-screen")}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-preference"
        >
          <AnalyticsProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}