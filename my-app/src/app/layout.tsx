import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'SalomãoBot Space',
  description: 'Guilherme Salomao Agostini\'s personal portifolio and project',
  icons: './favicon.png',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head>
        <link
          rel="icon"
          href="/icon.png"
          type="image/png"
          sizes='16x16'
        />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
