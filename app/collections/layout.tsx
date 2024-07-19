import '@/app/ui/global.css'
import { poppins } from '@/app/ui/fonts'

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${poppins.className} antialiased`}>
            {children}
        </body>
    </html>
  );
}
