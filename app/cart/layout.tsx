import '@/app/ui/global.css'
import { poppins } from '@/app/ui/fonts'
import Nav from '../ui/components/nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${poppins.className} antialiased`}>
            <Nav />
            {children}
        </body>
    </html>
  );
}
