import '@/app/ui/global.css'
import { poppins } from '@/app/ui/fonts'

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-5/6 mx-auto">
      {children}
    </div>
  );
}
