export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-11/12 max-w-96 mx-auto space-y-6 mt-28 mb-10">
      {children}
    </div>
  );
}