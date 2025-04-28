'use client'

import '@/app/ui/global.css'
import { poppins } from '@/app/ui/fonts'
import StoreProvider from '@/app/(pages)/StoreProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <html lang="en" className={`${poppins.variable}`}>
        <body className="font-poppins">
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
