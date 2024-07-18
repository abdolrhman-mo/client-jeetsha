import '@/app/ui/global.css'
import { poppins } from '@/app/ui/fonts'
import CheckoutNav from '@/app/ui/components/checkout/checkout-nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${poppins.className} antialiased`}>
            <CheckoutNav />
            {children}
        </body>
    </html>
  );
}
