import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr serena blake ',
  description: 'clinical psychologist',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="doctor.png" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
