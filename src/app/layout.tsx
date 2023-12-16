import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/styles.scss'

export const metadata: Metadata = {
  title: 'Timball',
  description: 'Generated by Tim Murren',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}