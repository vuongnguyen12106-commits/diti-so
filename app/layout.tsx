import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Be_Vietnam_Pro, Noto_Serif } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BottomNav } from '@/components/bottom-nav'
import './globals.css'

const beVietnam = Be_Vietnam_Pro({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-be-vietnam',
})

const notoSerif = Noto_Serif({
  subsets: ['vietnamese', 'latin'],
  weight: ['500', '600', '700'],
  variable: '--font-noto-serif',
})

export const metadata: Metadata = {
  title: {
    default: 'Hồ sơ số di tích quốc gia đặc biệt (G01)',
    template: '%s | Hồ sơ số di tích quốc gia đặc biệt',
  },
  description:
    'Tra cứu hồ sơ số 15 di tích quốc gia đặc biệt của Việt Nam: loại hình, địa phương, quyết định xếp hạng của Thủ tướng Chính phủ, giá trị tiêu biểu và nguồn tư liệu chính thống.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#6b3e26',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${notoSerif.variable}`}>
      <body className="min-h-dvh bg-background font-sans antialiased">
        <a
          href="#noi-dung"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Bỏ qua đến nội dung chính
        </a>
        <SiteHeader />
        <main id="noi-dung" className="mx-auto w-full max-w-5xl px-4 pb-28 pt-6 md:pb-12">
          {children}
        </main>
        <SiteFooter />
        <BottomNav />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
