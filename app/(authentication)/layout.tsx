import Nav from "@/app/ui/components/nav"
import { poppins } from "@/app/ui/fonts";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${poppins.className} antialiased`}>
            <Nav />
            <div className="w-11/12 max-w-96 mx-auto space-y-6 mt-28 mb-10">
              {children}
            </div>
        </body>
    </html>
  );
}